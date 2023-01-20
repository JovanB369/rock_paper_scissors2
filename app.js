//computer and player score
let playerScore = 0;
let compScore = 0;
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcomeDiv = document.querySelector(".outcome");

//computer choice arrow function

const computerChoice = () => {
  //creating array of choices for computer
  const arrOfChoices = ["rock", "paper", "scissors"];
  //creating random number generator from 0 to 2
  const randomNum = Math.floor(Math.random() * 3);
  const compChoice = arrOfChoices[randomNum];
  return compChoice;
};

// calling a function in console --> console.log(computerChoice());

// play round fuction

const playRound = (playerSelection, computerSelection) => {
  console.log(
    `Your choice = ${playerSelection};`,
    `Computer choice = ${computerSelection}`
  );

  if (playerSelection === "rock" && computerSelection === "rock") {
    const p = document.createElement("p");
    p.innerText = "It is a tie!";
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    const p = document.createElement("p");
    p.innerText = "It is a tie!";
    outcomeDiv.appendChild(p);
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    const p = document.createElement("p");
    p.innerText = "It is a tie!";
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    compScore++;
    const p = document.createElement("p");
    p.innerText = "You lost! Paper beats Rock";
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    compScore++;
    const p = document.createElement("p");
    p.innerText = "You lost! Scissors beats Paper";
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    compScore++;
    const p = document.createElement("p");
    p.innerText = "You lost! Rock beats Scissors";
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    const p = document.createElement("p");
    p.innerText = "You won! Rock beats Scissors";
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    const p = document.createElement("p");
    p.innerText = "You won! Paper beats Rock";
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    const p = document.createElement("p");
    p.innerText = "You won! Scissors beats Paper";
    outcomeDiv.appendChild(p);
  }
};

const checkWinner = (playerScore, compScore) => {
  if (playerScore === 5) {
    const h2 = document.createElement("h2");
    const button = document.createElement("button");
    button.innerText = "Play Again";
    button.addEventListener("click", () => {
      window.location.reload();
    });
    h2.innerText = "Congratulations!!! You won!";
    outcomeDiv.appendChild(h2);
    outcomeDiv.appendChild(button);
  }

  if (compScore === 5) {
    const h2 = document.createElement("h2");
    h2.innerText = "Ahhh! You lost!Better luck next time";
    const button = document.createElement("button");
    button.innerText = "Play Again";
    button.addEventListener("click", () => {
      window.location.reload();
    });
    outcomeDiv.appendChild(h2);
    outcomeDiv.appendChild(button);
  }
};

rockButton.addEventListener("click", () => {
  const computerSelection = computerChoice();
  const playerSelection = "rock";
  playRound(playerSelection, computerSelection);
  checkWinner(playerScore, compScore);
});

paperButton.addEventListener("click", () => {
  const computerSelection = computerChoice();
  const playerSelection = "paper";
  playRound(playerSelection, computerSelection);
  checkWinner(playerScore, compScore);
});

scissorsButton.addEventListener("click", () => {
  const computerSelection = computerChoice();
  const playerSelection = "scissors";
  playRound(playerSelection, computerSelection);
  checkWinner(playerScore, compScore);
});

// const game = () => {
//    for (let i = 0; i < 5; i++) {
//      const playerSelection = prompt(
//        "Type here your choice",
//        "Rock,Paper or Scissors"
//      ).toLowerCase();
//      const computerSelection = computerChoice();
//      console.log(playRound(playerSelection, computerSelection));
//   }

//   if (playerScore > compScore) {
//     return "You won!!You are genious!";
//   } else if (compScore > playerScore) {
//     return "You lost!! Try Again";
//   } else {
//     return "You tied!!";
//   }
// };

//console.log(game());
