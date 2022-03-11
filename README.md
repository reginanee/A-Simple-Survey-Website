# A Simple Survey Server

- [About](#About)
- [Link to Site](#Link-to-Site)
- [App Design](#App-Design)
- [Data Storage](#Data-Storage)


## About


## Link to Site

- Survey site: <https://regina-survey.herokuapp.com/>

- Challenge task site: <https://regina-survey.herokuapp.com/admin/summary>


## App Design
The survey app has the following URLs/pages:

- `/` -- 
the root page describes the survey and asks the user to consent to participate. It has two buttons at the bottom: "consent" (go to `/survey`) and "decline" (go to `/decline`).

<img width="960" alt="image" src="https://user-images.githubusercontent.com/75625953/157975749-2f8a9711-763e-4fff-8fff-206f3901f125.png">


- `/survey` -- asks the user a few questions, then a "next" button (go to `/thanks`). The input types include:
  - text input -- this field is "required" and has a minimum length of 3 characters. The user cannot proceed without filling it out -- use html5 validation.
  - a group of 3 or more radio buttons
  - select box with 3 or more options
  - checkbox
  - one "conditional" field of type textarea that appears or disappears depending on the state of the checkbox input.

<img width="960" alt="image" src="https://user-images.githubusercontent.com/75625953/157977223-5d8161bd-a2ac-454c-881d-fe938a3511da.png">



- `/decline` -- a page that says "thanks anyway" 

<img width="960" alt="image" src="https://user-images.githubusercontent.com/75625953/157979758-97810256-3ce5-48ca-ba86-4026fad92197.png">


- `/thanks` -- says thank you to the user for completing the survey

<img width="960" alt="image" src="https://user-images.githubusercontent.com/75625953/157979976-e0d6150d-e553-4a78-b1b9-8e113cf0373b.png">


The pages above share a template with a header that is consistent throughout. 

The app is styled using <https://purecss.io/>. The survey form fields is styled according to <https://purecss.io/forms/>.


- `/api/results` -- This URL is an API endpoint that returns a JSON representation of all the survey responses that we have collected to date (see below for data storage). By default, it returns all responses. This endpoint supports the following query parameter:
  - `?reverse=true` -- if the user includes this query parameter the results are instead ordered by most recent first
 
<img width="960" alt="image" src="https://user-images.githubusercontent.com/75625953/157976898-fc4cdc4c-8b46-4be8-bcc0-d2e9b8396f66.png">

- `/admin/summary` -- this web page shows an aggregated summary of the survey results:
  - text answers are shown individually
  - for each choice/checkbox question: one summary chart (e.g., bar chart)
  - one additional time series chart (Links to an external site.) that shows the number of survey responses per day
  - the charts is rendered with <http://www.chartjs.org>

<img width="960" alt="image" src="https://user-images.githubusercontent.com/75625953/157980371-a026fd0f-a40c-4d9c-8139-02e4d87a7652.png">


## Data Storage
The postgres database has a single table to store survey responses. It includes a field for each survey question, as well as an auto-incrementing primary key (e.g., id SERIAL PRIMARY KEY) and a timestamp. 

The json representation of survey responses includes the id and timestamp fields, along with all of the responses.

