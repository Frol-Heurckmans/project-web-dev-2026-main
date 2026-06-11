
// JavaScript code voor de clicker game.

// Variabelen aanmaken voor de game.

let username = localStorage.getItem("username") || "Guest";
let isSnert = username === "SNERT" || localStorage.getItem("snertMode") === "true";
let currentCoins = parseInt(localStorage.getItem(username + "_coins")) || 0;
let coinsPerClick = parseInt(localStorage.getItem(username + "_coinsPerClick")) || 1;
let upgradeCost = parseInt(localStorage.getItem(username + "_upgradeCost")) || 50;
let ultraUpgradeCost = 1000;

//Secret Snert Mode activeren als de username "SNERT" is.
if (username === "SNERT") {
    currentCoins += 100;
    coinsPerClick *= 2;
    upgradeCost = Math.floor(upgradeCost * 0.5);
}

document.getElementById("coinCount").textContent = "Coins: " + currentCoins;

//Functies aanmaken voor knoppen.

function goToGame() {
    let inputName = document.getElementById("username").value.trim();
    if (inputName === "") {
        inputName = "Guest";
    }
    if (inputName === "SNERT") {
        localStorage.setItem("snertMode", "true");
    } else {
        localStorage.setItem("snertMode", "false");
    }

    localStorage.setItem("username", inputName);

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
    saveGame();
}

function buyUpgrade() {
    if (currentCoins >= upgradeCost) {
        currentCoins -= upgradeCost;
        coinsPerClick++;
        upgradeCost = Math.ceil(upgradeCost * 1.15);
        document.getElementById("coinCount").textContent =
            "Coins: " + currentCoins;
        let upgradeButton = document.getElementById("upgradeButton");
        if (upgradeButton) {
            upgradeButton.textContent = 
                "Upgrade (Cost: " + upgradeCost + " coins)";
        }
        let clickPower = document.getElementById("clickPower");
        if (clickPower) {
            clickPower.textContent =
                "Coins per click: " + coinsPerClick;
        }
        saveGame();
    }
}

let upgradeButton = document.getElementById("upgradeButton");

if (upgradeButton) {
    upgradeButton.textContent = 
        "Upgrade (Cost: " + upgradeCost + " coins)";
}
let playerInfo = document.getElementById("playerInfo");

if (playerInfo) {
    playerInfo.textContent =
        "Playing as: " + username;
}

function saveGame() {
    localStorage.setItem(username + "_coins", currentCoins);
    localStorage.setItem(username + "_coinsPerClick", coinsPerClick);
    localStorage.setItem(username + "_upgradeCost", upgradeCost);
    localStorage.setItem(username + "_ultraUpgradeCost", ultraUpgradeCost);
}

function buyUltraUpgrade() {
    if (currentCoins >= ultraUpgradeCost) {
        currentCoins -= ultraUpgradeCost;
        coinsPerClick = Math.floor(coinsPerClick + 25);
        ultraUpgradeCost = Math.ceil(ultraUpgradeCost * 1.25);
        document.getElementById("coinCount").textContent =
            "Coins: " + currentCoins;
        let ultraBtn = document.getElementById("ultraUpgradeButton");
        if (ultraBtn) {
            ultraBtn.textContent =
                "Ultra Upgrade (Cost: " + ultraUpgradeCost + " coins)";
        }
        let clickPower = document.getElementById("clickPower");
        if (clickPower) {
            clickPower.textContent =
                "Coins per click: " + coinsPerClick;
        }
        saveGame();
    }
}

let clickPower = document.getElementById("clickPower");

if (clickPower) {
    clickPower.textContent =
        "Coins per click: " + coinsPerClick;
}