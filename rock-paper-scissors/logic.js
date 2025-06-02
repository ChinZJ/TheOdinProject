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
    let answer = prompt("rock, paper, or scissors?");
    return answer.toLowerCase();
}

let answer = getHumanChoice();
console.log(answer);