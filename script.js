// score

let playerScore = 0;
let computerScore = 0;

//player selections w dom

const playerSelection = ["rock", "paper", "scissors"];

const rockPlayerButton = document.querySelector(".playerRock");
const paperPlayerButton = document.querySelector(".playerPaper");
const scissorsPlayerButton = document.querySelector(".playerScissors");

const playerImg = document.querySelector(".player-img");
const computerImg = document.querySelector(".computer-img");

//computer options

const computerPlay = function () {
  const compOptions = ["rock", "paper", "scissors"];
  const compRandom = Math.trunc(Math.random() * 3);

  return compOptions[compRandom];
};

//display result DOM

const displayResult = document.querySelector(".currentResult");
const displayPlayerScore = document.querySelector(".player-score");
const displayComputerScore = document.querySelector(".computer-score");

//reset button
const buttonReset = document.querySelector(".reset");

//play one round of R/P/S
const playRound = function (playerSelection, computerSelection) {
  //display choice img

  playerImg.classList.remove("hide");
  computerImg.classList.remove("hide");

  //check for a tie
  if (playerSelection === computerSelection) {
    displayResult.textContent = "It's a tie!";
    playerScore = playerScore;
    computerScore = computerScore;
    console.log("it's a tie");
  }

  // check for rock

  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      playerScore++;
      displayResult.textContent = "You're doing great!";
      displayPlayerScore.textContent = `You:${playerScore}`;
    } else if (computerSelection === "paper") {
      computerScore++;
      displayResult.textContent = "Computer wins";
      displayComputerScore.textContent = `Computer: ${computerScore}`;
    }
  }

  // check for paper

  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      computerScore++;
      displayResult.textContent = "Computer wins!";
      displayComputerScore.textContent = `Computer: ${computerScore}`;
    } else if (computerSelection === "rock") {
      playerScore++;
      displayResult.textContent = "Nice! You win!";
      displayPlayerScore.textContent = `You: ${playerScore}`;
    }
  }

  //check for scissors

  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      displayResult.textContent = "Computer wins!";
      displayComputerScore.textContent = `Computer: ${computerScore}`;
    } else if (computerSelection === "paper") {
      playerScore++;
      displayResult.textContent = "You're amazing!";
      displayPlayerScore.textContent = `You: ${playerScore}`;
    }
  }

  if (playerScore === 5) {
    displayResult.textContent = "YOU WIN! AWESOME!";
    displayResult.classList.add("grow");
    displayResult.style.color = "#00ff7f";

    rockPlayerButton.disabled = true;
    paperPlayerButton.disabled = true;
    scissorsPlayerButton.disabled = true;
  } else if (computerScore === 5) {
    displayResult.textContent = "YOU LOST! GAME OVER!";
    displayResult.classList.add("grow");
    displayResult.style.color = "	#DC143C";

    rockPlayerButton.disabled = true;
    paperPlayerButton.disabled = true;
    scissorsPlayerButton.disabled = true;
  }

  if (computerSelection === "rock") {
    computerImg.src = "images/rock_RPS.jpg";
  } else if (computerSelection === "paper") {
    computerImg.src = "images/paper_RPS.jpg";
  } else if (computerSelection === "scissors") {
    computerImg.src = "images/scissors_RPS.jpg";
  }

  if (playerSelection === "rock") {
    playerImg.src = "images/rock_RPS.jpg";
  } else if (playerSelection === "paper") {
    playerImg.src = "images/paper_RPS.jpg";
  } else if (playerSelection === "scissors") {
    playerImg.src = "images/scissors_RPS.jpg";
  }
};

// functions for buttons' eventlisteners

const chooseRock = function () {
  let playerSelection = "rock";
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
};

const choosePaper = function () {
  let playerSelection = "paper";
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
};

const chooseScissors = function () {
  let playerSelection = "scissors";
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
};

const resetGame = function () {
  displayComputerScore.textContent = "Computer: 0";
  displayPlayerScore.textContent = "You: 0";
  displayResult.textContent = "Select your weapon to start playing!";
  displayResult.style.color = "#ffff";
  displayResult.classList.remove("grow");
  playerScore = 0;
  computerScore = 0;
  rockPlayerButton.disabled = false;
  paperPlayerButton.disabled = false;
  scissorsPlayerButton.disabled = false;
  playerImg.classList.add("hide");
  computerImg.classList.add("hide");
};

rockPlayerButton.addEventListener("click", chooseRock);

paperPlayerButton.addEventListener("click", choosePaper);

scissorsPlayerButton.addEventListener("click", chooseScissors);

buttonReset.addEventListener("click", resetGame);
