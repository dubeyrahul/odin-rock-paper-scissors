const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    randomIndex = Math.floor(Math.random()*3)
    return choices[randomIndex];
}

function getHumanChoice() {
    let humanChoice = prompt("Enter rock/paper/scissors? ");
    if (humanChoice == "") {
        console.log("Empty input, assuming rock");
        humanChoice = "rock";
    }
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

let computerWins = 0;
let humanWins = 0;
let draws = 0;
const currentRound = document.querySelector("#current");
const overallResults = document.querySelector("#overall");

const gameOver = document.createElement("div");
document.body.appendChild(gameOver);

function playRound(event) {
    const computerChoice = getComputerChoice();
    console.log(event.target.id);
    const humanChoice = event.target.id;
    if (computerChoice == humanChoice) {
        console.log("Draw");
        draws += 1; 
        currentRound.textContent = "Draw";
    }
    else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            computerWins += 1;
            console.log("You lose! Paper beats Rock");
            currentRound.textContent = "You lose! Paper beats Rock";
        }
        else {
            humanWins += 1;
            console.log("You win! Rock beats Scissors");
            currentRound.textContent = "You win! Rock beats Scissors";
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanWins += 1;
            console.log("You win! Paper beats Rock");
            currentRound.textContent = "You win! Paper beats Rock";
        }
        else {
            computerWins += 1;
            console.log("You lose! Scissors beats Paper");
            currentRound.textContent = "You lose! Scissors beats Paper";
        }
    }
    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            computerWins += 1;
            console.log("You lose! Rock beats Scissors");
            currentRound.textContent = "You lose! Rock beats Scissors";
        }
        else {
            humanWins += 1;
            console.log("You win! Scissors beats Paper");
            currentRound.textContent = "You win! Scissors beats Paper";
        }
    }
    overallResults.textContent = `Draws = ${draws}, Human = ${humanWins}, Computer = ${computerWins}`;
    if (humanWins == 5) {
        gameOver.textContent = "Game over! You won!";
    } else if (computerWins == 5) {
        gameOver.textContent = "Game over! Computer won!";
    }
    if (humanWins == 5 || computerWins == 5) {
        selections.disabled = true;
    }

}
const selections = document.querySelector("#selections");
selections.addEventListener(
    "click",
    playRound
);