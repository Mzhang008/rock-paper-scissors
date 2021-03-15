function computerPlay() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            console.log("Error");
    }
}

function rpsRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if ((playerSelection === "rock" && computerSelection === "Scissors" ) ||
        (playerSelection === "paper" && computerSelection === "Rock") ||
        (playerSelection === "scissors" && computerSelection === "Paper")) {
            return 0; //Win
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return 1; //Draw
    } else {
        return 2; //Lose;
    }
}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 5 && computerScore < 5) {
        let playerChoice = prompt("Enter Rock, Paper, or Scissors against the computer: ", "Rock/Paper/Scissors");
        computerChoice = computerPlay();
        if (rpsRound(playerChoice, computerChoice) === 0) { //win
            console.log("You Win! " + playerChoice.charAt(0).toUpperCase() +
                playerChoice.slice(1) + " beats " + computerChoice);
            playerScore++;
        } else if (rpsRound(playerChoice, computerChoice) === 1)  { //draw
            console.log("Draw! " + playerChoice + " draws with " + computerChoice);
        } else { //lose
            console.log("You Lose! " + computerChoice + " beats " + playerChoice.charAt(0).toUpperCase() +
                playerChoice.slice(1));
            computerScore++;
        }
    }
    if (playerScore === 5) {
        console.log("You win the match! Player score: " + playerScore + ", Computer score: " + computerScore);
    } else {
        console.log("You lose the match... Player score: " + playerScore + ", Computer score: " + computerScore);
    }
}