function init() {
    document.getElementById('showAntique').addEventListener('click', showAntiqueCars);
    document.getElementById('showNonAntique').addEventListener('click', showNonAntiqueCars);
    document.getElementById('showAll').addEventListener('click', showAll);
}
function showAntiqueCars() {
    document.getElementById('antiqueCars').className = "visible";
    document.getElementById('nonAntiqueCars').className = "hidden";
}
function showNonAntiqueCars() {
    document.getElementById('antiqueCars').className = "hidden";
    document.getElementById('nonAntiqueCars').className = "visible";
}
function showAll() {
    document.getElementById('antiqueCars').className = "visible";
    document.getElementById('nonAntiqueCars').className = "visible";
}