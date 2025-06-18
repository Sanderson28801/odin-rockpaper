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

function playRound(humanChoice, computerChoice) {
  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          return "You tie! Rock ties Rock";

        case "paper":
          computerScore++;
          return "You lose! Rock loses to Paper";

        case "scissor":
          humanScore++;
          return "You win! Rock beats Scissor";
      }

    case "paper":
      switch (computerChoice) {
        case "rock":
          humanScore++;
          return "You win! Paper beats Rock";

        case "paper":
          return "You tie! Paper ties Paper";

        case "scissor":
          computerScore++;
          return "You lose! Paper loses to Scissor";
      }

    case "scissor":
      switch (computerChoice) {
        case "rock":
          computerScore++;
          return "You lose! Scissor loses to Rock";
        case "paper":
          humanScore++;
          return "You win! Scissor beats Paper";
        case "scissor":
          return "You tie! Scissor ties Scissor";
      }
  }
}

function endGame() {
  const result = document.createElement("h1");
  let ended = false;
  if (humanScore === 5) {
    result.textContent = "You Win";
    ended = true;
  } else if (computerScore === 5) {
    result.textContent = "You Lose";
    ended = true;
  }
  if (ended) {
    result.setAttribute("class", "output");
    selectors.appendChild(result);
    const playAgain = document.createElement("button");
    playAgain.textContent = "Play Again";
    playAgain.setAttribute("class", "output");
    selectors.appendChild(playAgain);
    playAgain.addEventListener("click", () => {
      humanScore = 0;
      computerScore = 0;
      const outputs = document.querySelectorAll(".output");
      outputs.forEach((output) => output.remove());
    });
  }
}

// playGame();

const selectors = document.querySelector("#selectors");
const humanS = document.querySelector("#humanScore");
const computerS = document.querySelector("#computerScore");

humanS.textContent = humanScore;
computerS.textContent = computerScore;

selectors.addEventListener("click", (e) => {
  if (humanScore !== 5 && computerScore !== 5) {
    const target = e.target;
    const result = document.createElement("p");
    result.textContent = playRound(target.id, getComputerChoice());
    result.setAttribute("class", "output");
    selectors.appendChild(result);
    humanS.textContent = humanScore;
    computerS.textContent = computerScore;
    endGame();
  }
});
