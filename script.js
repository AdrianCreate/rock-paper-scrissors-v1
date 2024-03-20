console.log("Hello");

function getComputerChoice() {
  var options = ['rock', 'paper', 'scrissors'];
  var choice = options[Math.floor(Math.random()*options.length)];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if(playerSelection === computerSelection) {
    return "It's a draw";
  }
  if(playerSelection === "rock" && computerSelection === "scrissors") {
    return "Player wins";
  }
  if(playerSelection === "rock" && computerSelection === "paper") {
    return "Player loses";
  }
  if(playerSelection === "paper" && computerSelection === "rock") {
    return "Player wins";
  }
  if(playerSelection === "paper" && computerSelection === "scrissors") {
    return "Player loses";
  }
  if(playerSelection === "scrissors" && computerSelection === "paper") {
    return "Player wins";
  }
  if(playerSelection === "scrissors" && computerSelection === "rock") {
    return "Player loses";
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log("Player selects: " + playerSelection);
console.log("Computer selects: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));
