let player1Name = "";
let player2Name = "";
let player1Points = 0;
let player2Points = 0;
let currentPlayer = "";
let pointsToWin = 0;
let roundPoints = 0;
let gameOn = false;

function startGame() {
    player1Name = document.getElementById("player1Name").value;
    player2Name = document.getElementById("player2Name").value;
    pointsToWin = document.getElementById("pointsToWin").value;
    currentPlayer = player1Name;
    gameOn = true;

    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
    document.getElementById("player1NameDisplay").innerHTML = player1Name;
    document.getElementById("player2NameDisplay").innerHTML = player2Name;
    document.getElementById("currentPlayerDisplay").innerHTML = currentPlayer;
}

function rollDice() {
    if (!gameOn) {
        return;
    }
    let roll = Math.floor(Math.random() * 6) + 1;
    if (roll === 1) {
        roundPoints = 0;
        currentPlayer === player1Name ? currentPlayer = player2Name : currentPlayer = player1Name;
        document.getElementById("currentPlayerDisplay").innerHTML = currentPlayer;
    } else {
        roundPoints += roll;
        document.getElementById("roundPointsDisplay").innerHTML = roundPoints;
    }
}

function stopTurn() {
    if (!gameOn) {
        return;
    }
    if (currentPlayer === player1Name) {
        player1Points += roundPoints;
        document.getElementById("player1PointsDisplay").innerHTML = player1Points;
        currentPlayer = player2Name;
    } else {
        player2Points += roundPoints;
        document.getElementById("player2PointsDisplay").innerHTML = player2Points;
        currentPlayer = player1Name;
    }
    roundPoints = 0;
    document.getElementById("currentPlayerDisplay").innerHTML = currentPlayer;
    document.getElementById("roundPointsDisplay").innerHTML = roundPoints;

    if (player1Points >= pointsToWin) {
        document.getElementById("gameScreen").style.display = "none";
        document.getElementById("winScreen").style.display = "block";
        document.getElementById("winner").innerHTML = player1Name;
        gameOn = false;
    } else if (player2Points >= pointsToWin) {
        document.getElementById("gameScreen").style.display = "none";
        document.getElementById("winScreen").style.display = "block";
        document.getElementById("winner").innerHTML = player2Name;
        gameOn = false;
    }
}