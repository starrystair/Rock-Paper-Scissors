//Returns 'rock', paper' or 'scissors' randomly
let win;
let lose;

function computerPlay() {

  switch (Math.ceil(Math.random() * 3)) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
    default:
      return "error";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  win = playerSelection + " beats " + computerSelection + ". You win!";
  lose = computerSelection + " beats " + playerSelection + ". You lose...";

  if (playerSelection === computerSelection) {
    return "Two " + playerSelection + "s. It's a draw!";
  }

  else if (playerSelection === "rock") {
    return ((computerSelection === "scissors") ? win : lose);
  }
  else if (playerSelection === "paper") {
    return ((computerSelection === "rock") ? win : lose);
  }
  else if (playerSelection === "scissors") {
    return ((computerSelection === "paper") ? win : lose);
  }

}

function game() {
  let playerLives = 5;
  let computerLives = 5;

  while (playerLives > 0 && computerLives > 0) {
    if (playRound( prompt("Choose wisely...", "Rock"),  computerPlay() ) === win) {
      computerLives--;
      console.log(win);
    }
    else {
      playerLives--;
      console.log(lose);
    }
  }

  if (computerLives === 0) {console.log("You are victorious!");}
  else {console.log("You have been defeated...");}
}

game();