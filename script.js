const choices = ["rock", "paper", "scissors"];
function getComputerChoice(){   
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function getHumanChoice(){
    let userInput = prompt("Please enter your choice (rock, paper, or scissors)").toLowerCase();
    while (!choices.includes(userInput)){
        userInput = prompt("Invalid input. Please enter your choice (rock, paper, or scissors)").toLowerCase();
    }
    return userInput;
}
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        return 0;
    }else if((humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "scissors")){
        return 1;        
    }
    else{
        return -1;        
    }
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        console.log("human choice: " + humanSelection);
        const computerSelection = getComputerChoice();
        console.log("computer choice: " + computerSelection);

        let res = playRound(humanSelection, computerSelection);
        if (res === 1){
            humanScore++;
        }else if(res == -1){
            computerScore++;
        }
        console.log(res);

    }
    console.log("Final: " + ((humanScore > computerScore) ? "You won":
                            (humanScore < computerScore) ? "You lost":
                                                            "Game even"));
}
  

playGame(); 