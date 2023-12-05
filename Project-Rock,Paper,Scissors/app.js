getPlayerChoice = () => {
  const choiceBtn = document.querySelectorAll(".choiceBtn");
  choiceBtn.forEach((button) => {
    button.addEventListener("click", () => {
      let playerChoice = "";
      if (button.innerHTML === "Rock") {
        playerChoice = "rock";
      } else if (button.innerHTML === "Paper") {
        playerChoice = "paper";
      } else if (button.innerHTML === "Scissors") {
        playerChoice = "scissors";
      }
      console.log(playerChoice);
      return playerChoice;
    });
  });
};

const newGame = document.querySelectorAll("#newGameBtn");
newGameBtn.addEventListener("click", () => {
  alert(newGameBtn.id);
});

function getComputerChoice() {
  let computerChoice = "";
  let index = Math.floor(Math.random() * 3);
  if (index === 0) {
    computerChoice = "rock";
  } else if (index === 1) {
    computerChoice = "paper";
  } else if (index === 2) {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  let outcome = " ";
  if (playerSelection === computerSelection) {
    outcome = "Tie!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    outcome = "You win! rock beats scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    outcome = "You win! paper beats rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    outcome = "You win! scissors beats paper";
  } else {
    outcome = "You lose!";
  }
  return outcome;
}

function game() {
  let i = 0;
  let playerScore = 0;
  let computerScore = 0;
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  while (i <= 5) {
    let gameResult = playRound(playerSelection, computerSelection);
    if (gameResult === "Tie!") {
      playerScore++;
      computerScore++;
    } else if (
      gameResult === "You win! rock beats scissors" ||
      gameResult === "You win! paper beats rock" ||
      gameResult === "You win! scissors beats paper"
    ) {
      playerScore++;
    } else if (gameResult === "You lose!") {
      computerScore++;
    }
    console.log(gameResult);
    i++;
  }
  gamePlayerOutcome = "Your score is: " + playerScore;
  gameComputerOutcome = "The computer score is: " + computerScore;
  console.log(gamePlayerOutcome);
  console.log(gameComputerOutcome);
}

console.log(game());
