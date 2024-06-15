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



function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice){
            console.log("Game even");
        }else if((humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors")){
            humanScore += 1;
            console.log("You won!");
            
        }
        else{
            computerScore += 1;
            console.log("You lost");        
        }
    }
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        console.log("human choice: " + humanSelection);
        const computerSelection = getComputerChoice();
        console.log("computer choice: " + computerSelection);

        playRound(humanSelection, computerSelection);

    }
    console.log("Final: " + ((humanScore > computerScore) ? "You won":
                            (humanScore < computerScore) ? "You lost":
                                                            "Game even"));
}
  

playGame(); 