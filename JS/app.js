
// JavaScript code voor de clicker game.
//Functies aanmaken voor knoppen.

let coinsPerClick = 1;
let upgradeCost = 50;

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
    let coinCountElement = document.getElementById("coinCount");
    let currentCoins = parseInt(coinCountElement.textContent.split(": ")[1]);
    currentCoins += coinsPerClick;
    coinCountElement.textContent = "Coins: " + currentCoins;
}

function buyUpgrade() {
    let coinCountElement = document.getElementById("coinCount");
    let currentCoins = parseInt(coinCountElement.textContent.split(": ")[1]);
    if (currentCoins >= upgradeCost) {
        currentCoins -= upgradeCost;
        coinsPerClick++;
        upgradeCost = Math.ceil(upgradeCost * 1.5);
        coinCountElement.textContent = "Coins: " + currentCoins;
        document.getElementById("upgradeCost").textContent = "Upgrade Cost: " + upgradeCost;
    }
}
document.getElementById("upgradeButton").textContent = "Upgrade (Cost: " + upgradeCost + " coins)";

const username = localStorage.getItem("username");

document.getElementById("playerInfo").textContent = "Playing as: " + username;