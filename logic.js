let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissor";
  }
}

function getHumanChoice() {
  let playerChoice = prompt("Choose rock, paper, or scissors: ");

  return playerChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          console.log("You tie! Rock ties Rock");
          break;
        case "paper":
          console.log("You lose! Rock loses to Paper");
          computerScore++;
          break;
        case "scissor":
          console.log("You win! Rock beats Scissor");
          humanScore++;
          break;
      }
      break;
    case "paper":
      switch (computerChoice) {
        case "rock":
          console.log("You win! Paper beats Rock");
          humanScore++;
          break;
        case "paper":
          console.log("You tie! Paper ties Paper");
          break;
        case "scissor":
          console.log("You lose! Paper loses to Scissor");
          computerScore++;
          break;
      }
      break;
    case "scissor":
      switch (computerChoice) {
        case "rock":
          console.log("You lose! Scissor loses to Rock");
          computerScore++;
          break;
        case "paper":
          console.log("You win! Scissor beats Paper");
          humanScore++;
          break;
        case "scissor":
          console.log("You tie! Scissor ties Scissor");
          break;
      }
      break;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
  }
  if (humanScore === computerScore) {
    console.log("Tie Game");
  } else if (humanScore > computerScore) {
    console.log("You Win");
  } else {
    console.log("You Lose");
  }
}

playGame();
