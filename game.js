const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    randomIndex = Math.floor(Math.random()*3)
    // console.log(choices[randomIndex]);
    return choices[randomIndex];
}

function getHumanChoice() {
    let humanChoice = prompt("Enter rock/paper/scissors? ");
    if (humanChoice == "") {
        console.log("Empty input, assuming rock");
        humanChoice = "rock";
    }
    humanChoice = humanChoice.toLowerCase();
    // console.log(humanChoice);
    return humanChoice;
}

function playGame(numRounds = 5) {
    let computerWins = 0;
    let humanWins = 0;
    let draws = 0;
    let playRound = function(computerChoice, humanChoice) {
        console.log(`Computer choice = ${computerChoice}, Human choice = ${humanChoice}`);
        if (computerChoice == humanChoice) {
            console.log("Draw");
            draws += 1; 
        }
        else if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                computerWins += 1;
                console.log("You lose! Paper beats Rock");
            }
            else {
                humanWins += 1;
                console.log("You win! Rock beats Scissors");
            }
        }
        else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                humanWins += 1;
                console.log("You win! Paper beats Rock");
            }
            else {
                computerWins += 1;
                console.log("You lose! Scissors beats Paper");
            }
        }
        else if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                computerWins += 1;
                console.log("You lose! Rock beats Scissors");
            }
            else {
                humanWins += 1;
                console.log("You win! Scissors beats Paper");
            }
        }
    };
    for (let i=0; i<numRounds; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }
    console.log(`Computer score = ${computerWins}`)
    console.log(`Human score = ${humanWins}`)
    console.log(`Draws = ${draws}`)
}
playGame();