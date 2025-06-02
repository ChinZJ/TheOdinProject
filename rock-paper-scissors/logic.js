const choiceConverter = ["rock", "paper", "scissors"];
const choiceLength = choiceConverter.length;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Alternatively, use if else statements instead of arrays.
function getComputerChoice() {
    return choiceConverter[getRandomInt(choiceLength)];
}

console.log(getComputerChoice());