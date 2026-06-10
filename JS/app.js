
// JavaScript code voor de clicker game.

// Variabelen aanmaken voor de game.

let username = localStorage.getItem("username") || "Guest";
let currentCoins = parseInt(localStorage.getItem(username + "_coins")) || 0;
let coinsPerClick = parseInt(localStorage.getItem(username + "_coinsPerClick")) || 1;
let upgradeCost = parseInt(localStorage.getItem(username + "_upgradeCost")) || 50;
let ultraUpgradeCost = 1000;

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

function clickButton() {
   currentCoins += coinsPerClick;
   document.getElementById("coinCount").textContent = 
        "Coins: " + currentCoins;
}

function buyUpgrade() {
    if (currentCoins >= upgradeCost) {
        currentCoins -= upgradeCost;
        coinsPerClick++;
        upgradeCost = Math.ceil(upgradeCost * 1.15);
        document.getElementById("coinCount").textContent =
            "Coins: " + currentCoins;
        document.getElementById("upgradeButton").textContent = 
            "Upgrade (Cost: " + upgradeCost + " coins)";
    }
}

document.getElementById("upgradeButton").textContent = "Upgrade (Cost: " + upgradeCost + " coins)";

document.getElementById("playerInfo").textContent = "Playing as: " + username;