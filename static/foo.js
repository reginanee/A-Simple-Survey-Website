var checker = document.getElementById("check");
var textInput = document.getElementById("textInput");

checker.addEventListener('change', function() {
    if (this.checked) {
        textInput.style.visibility = "visible";
    } else {
        textInput.style.visibility = "hidden";
    }
});