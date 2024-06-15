Rock, Paper, Scissors

Project Description

This is a simple implementation of the classic game "Rock, Paper, Scissors" as part of The Odin Project's Foundations course. The project helps to practice and reinforce basic JavaScript skills, including working with functions, loops, conditionals, and user inputs.

Features

Playable game between a human player and the computer.
Best-of-five rounds format to determine the winner.
Simple and intuitive command-line interface.
How to Play

The player selects one of the three options: Rock, Paper, or Scissors.
The computer randomly selects one of the three options.
The winner of the round is determined by the following rules:
Rock beats Scissors.
Scissors beats Paper.
Paper beats Rock.
The first to win three out of five rounds wins the game.
Getting Started

Prerequisites
To run this project, you need to have a web browser with JavaScript enabled.

Installation
Clone the repository or download the project files to your local machine.
Open the index.html file in your preferred web browser.
Usage
Open your browser's console (usually by pressing F12 or right-clicking on the page and selecting "Inspect" or "Inspect Element" and then navigating to the "Console" tab).
Follow the prompts to input your choice of Rock, Paper, or Scissors.
Project Structure

index.html - The main HTML file that loads the JavaScript.
style.css - (Optional) CSS file for any styling, if you choose to add a user interface.
script.js - The JavaScript file containing the game logic.
Code Overview

script.js
getComputerChoice - Function that randomly returns 'Rock', 'Paper', or 'Scissors'.
playRound - Function that plays a single round of Rock, Paper, Scissors. It takes the player's choice and the computer's choice as arguments and returns the result of the round.
game - Function that manages the best-of-five rounds and keeps track of the score.
Acknowledgements

The Odin Project - This project is part of The Odin Project's curriculum.
License

This project is open source and available under the MIT License. See the LICENSE file for more information.
