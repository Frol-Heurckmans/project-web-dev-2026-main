
// JavaScript code voor de clicker game.
//Functies aanmaken voor knoppen.

function goToGame() {
    let username = document.getElementById("username").value.trim();
    if (username === "") {
        username = "Guest";
    }

    localStorage.setItem("username", username);

    window.location.href = "HTML/game.html";
}

function goToInfo() {
    window.location.href = "HTML/infopage.html";
}

function GoBack() {
    window.location.href = "../index.html";
}