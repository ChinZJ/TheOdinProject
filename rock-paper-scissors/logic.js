const choiceConverter = ["rock", "paper", "scissors"];
const choiceLength = choiceConverter.length;

let humanScore = 0;
let computerScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Alternatively, use if else statements instead of arrays.
function getComputerChoice() {
    return choiceConverter[getRandomInt(choiceLength)];
}

// console.log(getComputerChoice());

// Assume that the user will always enter a valid choice.
// Always converts to lowercase.
function getHumanChoice() {
    return prompt("rock, paper, or scissors?").trim().toLowerCase();
}

// let answer = getHumanChoice();
// console.log(answer);

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie!");
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

function playGame(rounds = 5) {
    while (rounds-- > 0) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

playGame();
console.log(`Results: ${humanScore} - ${computerScore}`);
