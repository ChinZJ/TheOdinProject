const choiceConverter = ["rock", "paper", "scissors"];
const choiceLength = choiceConverter.length;

// Create a div for displaying results and append console logs
const resultDiv = document.createElement("div");
const resultPara = document.createElement("p");
const gameResultPara = document.createElement("p");
resultDiv.appendChild(resultPara);
resultDiv.appendChild(gameResultPara);

const body = document.querySelector("body");
body.appendChild(resultDiv);

let humanScore = 0;
let computerScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Alternatively, use if else statements instead of arrays.
function getComputerChoice() {
    return choiceConverter[getRandomInt(choiceLength)];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultPara.textContent = "Tie!";
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        resultPara.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        resultPara.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    checkGameEnd();
}

function checkGameEnd() {
    if ((humanScore >= 5) || (computerScore >= 5)) {
        gameResultPara.textContent = `Results: ${humanScore} - ${computerScore}`
    }
}

// Add an event listener with the correct call
let buttons = document.querySelectorAll("button");
for (let button of buttons) {
    button.addEventListener("click", () => {
        playRound(button.textContent.toLowerCase(), getComputerChoice());
    });
}
