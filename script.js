const choices = ["rock", "paper", "scissors"];
function getComputerChoice(){   
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const buttonClicked = document.querySelector("#buttons");
let humanScore = 0;
let computerScore = 0;
buttonClicked.addEventListener('click', (event) => {
    let output = document.querySelector("#output");
    let humanChoice = event.target.id;
    output.innerHTML += `You chose ${humanChoice} <br>`;
    let computerChoice = getComputerChoice();
    output.innerHTML += `Computer chose ${computerChoice}`;
    output = ""
});


// function playRound(humanChoice, computerChoice) {
//     if (humanChoice === computerChoice){
//         return 0;
//     }else if((humanChoice === "scissors" && computerChoice === "paper") ||
//     (humanChoice === "paper" && computerChoice === "rock") ||
//     (humanChoice === "rock" && computerChoice === "scissors")){
//         return 1;        
//     }
//     else{
//         return -1;        
//     }
// }

