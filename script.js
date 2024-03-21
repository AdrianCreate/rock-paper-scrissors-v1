 console.log("Hello");

let playerSelection;

function handleClick(choice) {
  playerSelection = choice;
  if (playerSelection) { // Check if playerSelection is defined
    let result=playRound(playerSelection, getComputerChoice());
    console.log(result);
    const sect = document.querySelector(".resultsContainer");
    while (sect.firstChild) {
      sect.removeChild(sect.firstChild);
    }
    const roundMessage = document.createElement("p");
    roundMessage.textContent = result;
    sect.appendChild(roundMessage);
  }
}



document.querySelector("#rock").addEventListener('click', () => {
  handleClick('rock');
});

document.querySelector('#paper').addEventListener('click', () => {
  handleClick('paper');
});

document.querySelector('#scrissors').addEventListener('click', () => {
  handleClick('scrissors');
})


function getComputerChoice() {
  let options = ['rock', 'paper', 'scrissors'];
  let choice = options[Math.floor(Math.random()*options.length)];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  if(playerSelection === computerSelection) {
    return "It's a draw!";
  }
  if(playerSelection === "rock" && computerSelection === "scrissors") {
    return "Player wins! Rock beats Scrissors";
  }
  if(playerSelection === "rock" && computerSelection === "paper") {
    return "Player loses! Rock is beaten by Paper";
  }
  if(playerSelection === "paper" && computerSelection === "rock") {
    return "Player wins! Paper beats Rock";
  }
  if(playerSelection === "paper" && computerSelection === "scrissors") {
    return "Player loses! Paper is beaten by Scrissors";
  }
  if(playerSelection === "scrissors" && computerSelection === "paper") {
    return "Player wins! Scrissors beats Paper";
  }
  if(playerSelection === "scrissors" && computerSelection === "rock") {
    return "Player loses! Scrissors is beaten by Rock";
  }

}

  const sect = document.querySelector(".resultsContainer");
  const result = document.createElement("p");
  result.textContent = console.log(playRound());
  sect.appendChild(result);

/* function invalidChoice(playerSelection) {
  let options = ['rock', 'paper', 'scrissors'];
  if(!(options.includes(playerSelection))) {
    return true;
  }
  return false;
} */

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  let score = 0;
  while(score<5) {

  }
 /*  for(let i=0; i<5;i++) {
    let playerSelection = prompt("Choose your weapon");
    if (invalidChoice(playerSelection)) {
      playerSelection = prompt("Invalid weapon, choose a valid one:")
    }
    const computerSelection = getComputerChoice();
    console.log("Player selects: " + playerSelection);
    console.log("Computer selects: " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    if(playRound(playerSelection, computerSelection) === "Player wins") {
      playerScore++;
    }
    if(playRound(playerSelection, computerSelection) === "Player loses") {
      computerScore++;
    }
  } */
  console.log("Players' score: " + playerScore);
  console.log("Computer' score: " + computerScore);
  if(playerScore > computerScore) {
    console.log("The player wins the game!");
  }
  else if(playerScore < computerScore) {
    console.log("The computer wins the game!");
  } else {
    console.log("Neither one wins!");
  }

}

  /* playGame(); */


  /* const container = document.querySelector("#container");
  const red = document.createElement("p");
  red.textContent = "Hey I'm red!";
  container.appendChild(red);
  red.style.color = "red";
  const blue = document.createElement("h3");
  blue.textContent = "I'm a blue h3!";
  container.appendChild(blue);
  blue.style.color = "blue";
  const three = document.createElement("div");
  three.setAttribute("style", "border: 1px solid black; background-color: pink");
  const title = document.createElement("h1");
  title.textContent = "I'm in a div";
  three.appendChild(title);
  const para = document.createElement("p");
  para.textContent = "ME TOO!";
  three.appendChild(para);
  container.appendChild(three);

  const btn = document.querySelector("#btn");
  btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });
 */
