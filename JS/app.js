
// JavaScript code voor de clicker game.

// Variabelen aanmaken voor de game.

let currentCoins = 0;
let coinsPerClick = 1;
let upgradeCost = 50;
let username = localStorage.getItem("username");
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
        upgardeCost = Math.ceil(upgradeCost * 1.15);
        document.getElementById("coinCount").textContent =
            "Coins: " + currentCoins;
        document.getElementById("upgradeButton").textContent = 
            "Upgrade (Cost: " + upgradeCost + " coins)";
    }
}

document.getElementById("upgradeButton").textContent = "Upgrade (Cost: " + upgradeCost + " coins)";

const username = localStorage.getItem("username");

document.getElementById("playerInfo").textContent = "Playing as: " + username;