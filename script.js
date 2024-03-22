const roundResults = document.querySelector('.roundResults');
const playerPoints = document.querySelector('.playerScore');
const computerPoints = document.querySelector('.computerScore');
const resetBtn = document.querySelector('#resetBtn');

resetBtn.addEventListener('click', () => location.reload());

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundResults.textContent = "It's a draw!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    roundResults.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    playerPoints.textContent = ++playerScore;
  } else {
    roundResults.textContent = `You lose!`;
    computerPoints.textContent = ++computerScore;
  }

  roundResults.classList.remove("greenText", "redText");

  if (isGameOver()) {
    if (playerScore === 5) {
      roundResults.textContent = "You win the game!";
      roundResults.classList.add("greenText");
    } else {
      roundResults.textContent = "Computer wins the game!";
      roundResults.classList.add("redText");
    }
    // Disable the buttons to prevent further gameplay
    disableButtons();
  }
}

function getComputerChoice() {
  let options = ['rock', 'paper', 'scissors'];
  let choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

function disableButtons() {
  document.getElementById('rock').disabled = true;
  document.getElementById('paper').disabled = true;
  document.getElementById('scissors').disabled = true;
}

function handleClick(choice) {
  playerSelection = choice;
  playRound(playerSelection, getComputerChoice());
}

// Add event listeners to each button
document.getElementById('rock').addEventListener('click', function () {
  handleClick('rock');
});

document.getElementById('paper').addEventListener('click', function () {
  handleClick('paper');
});

document.getElementById('scissors').addEventListener('click', function () {
  handleClick('scissors');
});
