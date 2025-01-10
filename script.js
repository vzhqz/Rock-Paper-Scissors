/* WEBSITE DEVELOPED BY D!AA (VZHQZ) */
/* WEBSITE DEVELOPED BY D!AA (VZHQZ) */
const playerStatus = document.getElementById("playerStatus");
const computerStatus = document.getElementById("computerStatus");
const resultDisplay = document.getElementById("result");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");

let playerScore = 0;
let computerScore = 0;
function playGame(playerChoice) {
    let result;
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    playerStatus.textContent = `Player: ${playerChoice}`;
    computerStatus.textContent = `Computer: ${computerChoice}`;

    if(playerChoice === computerChoice) {
        result = "It's a tie!";
    } else {
        switch(playerChoice) {
            case "rock":
                result = (computerChoice === "paper") ? "You lost." : "You won!";
                break;
                case "paper":
                    result = (computerChoice === "scissors") ? "You lost." : "You won!";
                    break;
                    case "scissors":
                        result = (computerChoice === "rock") ? "You lost." : "You won!";
                    }
                }
                
    resultDisplay.classList.remove("blueColor", "redColor", "greenColor");
    switch(result) {
        case "It's a tie!":
            resultDisplay.classList.add("blueColor");
            break;
        case "You lost.":
            resultDisplay.classList.add("redColor");
            computerScore++;
            break;
        case "You won!":
            resultDisplay.classList.add("greenColor");
            playerScore++;
            break;
    }
    resultDisplay.textContent = result;

    playerScoreDisplay.classList.remove("blueColor", "redColor", "greenColor");
    computerScoreDisplay.classList.remove("blueColor", "redColor", "greenColor");
    
    const playerClass = (playerScore > computerScore) ? "greenColor" : (playerScore < computerScore) ? "redColor" : "blueColor";
    const computerClass = (playerScore < computerScore) ? "greenColor" : (playerScore > computerScore) ? "redColor" : "blueColor";

    playerScoreDisplay.innerHTML = `Player score: <span class="${playerClass}">${playerScore}</span>`;
    computerScoreDisplay.innerHTML = `Computer score: <span class="${computerClass}">${computerScore}</span>`;
    saveToLocalStorage()
}

function saveToLocalStorage() {
    localStorage.setItem("playerStatus", playerStatus.textContent);
    localStorage.setItem("computerStatus", computerStatus.textContent);
    localStorage.setItem("resultDisplay", resultDisplay.textContent);
    localStorage.setItem("playerScore", playerScore);
    localStorage.setItem("computerScore", computerScore);
}

function loadFromLocalStorage() {
    const storedPlayerStatus = localStorage.getItem("playerStatus");
    const storedComputerStatus = localStorage.getItem("computerStatus");
    const storedResultDisplay = localStorage.getItem("resultDisplay");
    const storedPlayerScore = localStorage.getItem("playerScore");
    const storedComputerScore = localStorage.getItem("computerScore");

    if(storedPlayerStatus) playerStatus.textContent = storedPlayerStatus;
    if(storedComputerStatus) computerStatus.textContent = storedComputerStatus;
    if(storedResultDisplay) resultDisplay.textContent = storedResultDisplay;
    if(storedPlayerScore) playerScore = parseInt(storedPlayerScore, 10);
    if(storedComputerScore) computerScore = parseInt(storedComputerScore, 10);

    playerScoreDisplay.innerHTML = `Player score: <span>${playerScore}</span>`;
    computerScoreDisplay.innerHTML = `Computer score: <span>${computerScore}</span>`;
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    playerStatus.textContent = `Player: `;
    computerStatus.textContent = `Computer: `;
    resultDisplay.textContent = "";
    playerScoreDisplay.textContent = `Player score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
    localStorage.clear();
}

window.onload = loadFromLocalStorage()