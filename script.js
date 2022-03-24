//Returns 'rock', paper' or 'scissors' randomly
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

//Plays a round and returns a corresponding string
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  let win = "win";
  let lose = "lose";
  let draw = "draw";

  if (playerSelection === computerSelection) {
    return draw;
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

//Plays a number of rounds until lives are depleted
function game() {
  let playerLives = 5;
  let computerLives = 5;

  while (playerLives > 0 && computerLives > 0) {

    let playerSelection = prompt("Choose wisely...", "Rock");
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);

    switch (result) {
      case "win":
        console.log("Your " + playerSelection + " beats their " + computerSelection +
          " - you win!");
          computerLives--;
        break;
      case "lose":
        console.log("Their " + computerSelection + " beats your " + playerSelection +
          " - you lose...");
          playerLives--;
        break;
      case "draw":
        console.log("Two " + playerSelection + "s - nobody wins!");
        break;
    }
    console.log("Player: " + (5-computerLives) + " Computer: " + (5 - playerLives));
  }

  if (computerLives === 0) { console.log("You are victorious!"); }
  else { console.log("You have been defeated..."); }
}

game();