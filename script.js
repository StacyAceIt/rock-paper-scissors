const choices = ["rock", "paper", "scissors"];
function getComputerChoice(){   
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
console.log("computer choice: " + getComputerChoice());

function getHumanChoice(){
    let userInput = prompt("Please enter your choice (rock, paper, or scissors)").toLowerCase();
    while (!choices.includes(userInput)){
        prompt("Invalid input. Please enter your choice (rock, paper, or scissors)").toLowerCase();
    }
    return userInput;
}
console.log("human choice: " + getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    
}