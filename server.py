from flask import Flask, render_template, request, g, redirect, url_for, jsonify
import datetime
import db
import json

app = Flask(__name__)

@app.before_first_request
def initialize():
    db.setup()

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/decline')
def decline():
    return render_template("decline.html")

@app.route('/thanks')
def thanks():
    return render_template("thanks.html")

@app.route('/survey')
def survey():
    return render_template("survey.html")

@app.route('/survey', methods=['POST'])
def submit():
    with db.get_db_cursor(True) as cur:
        name = request.form.get("name", None)
        pet = request.form.get("pet", None)
        year = request.form.get("year", None)
        suggestions = request.form.get("suggestions", None)
        suggestions = None if suggestions == '' else suggestions
        
        cur.execute("INSERT INTO survey (usr_name, usr_pet, usr_year, usr_suggestions) values (%s, %s, %s, %s)", (name, pet, year, suggestions))

        return redirect(url_for('thanks'))
    
@app.errorhandler(404)
def page_not_found(error):
    return render_template("error.html")
    

@app.route('/api/results', methods=['GET'])
def survey_api_results():
    query = request.args.get('reverse')
    with db.get_db_cursor() as cur:
        cur.execute("SELECT row_to_json(survey) from survey;")
        data = [record for record in cur] 
    if query:
        app.logger.info(f"query: {query}")
        data.reverse()

    return jsonify(data)


@app.route('/admin/summary')
def summary():
    with db.get_db_cursor(False) as cur:
        cur.execute("SELECT * FROM survey;")
        data = [record for record in cur]
    return render_template("summary.html", data=data)
