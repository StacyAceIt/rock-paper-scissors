const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {   
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's even";
    } else if ((humanChoice === "scissors" && computerChoice === "paper") ||
               (humanChoice === "paper" && computerChoice === "rock") ||
               (humanChoice === "rock" && computerChoice === "scissors")) {
        return "You won";
    } else {
        return "Computer won";
    }
}

let humanScore = 0;
let computerScore = 0;

document.querySelectorAll("#buttons button").forEach(button => {
    button.addEventListener('click', (event) => {
        const humanChoice = event.target.id;
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);

        if (result === "You won") {
            humanScore += 1;
        } else if (result === "Computer won") {
            computerScore += 1;
        }

        updateOutput(humanChoice, computerChoice, result);
        checkWinner();
    });
});

function updateOutput(humanChoice, computerChoice, result) {
    const output = document.querySelector("#output");
    output.innerHTML = `
        You chose ${humanChoice} <br>
        Computer chose ${computerChoice} <br>
        Score You vs Computer: ${humanScore} : ${computerScore} <br>
        Result for this round: ${result}
    `;
}

function checkWinner() {
    const output2 = document.querySelector("#output2");
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            output2.innerHTML = "-------- Human Wins -----------";
        } else if (computerScore === 5) {
            output2.innerHTML = "-------- Computer Wins -----------";
        }
        humanScore = 0;
        computerScore = 0;
    } else {
        output2.innerHTML = "";
    }
}
