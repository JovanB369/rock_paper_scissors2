//computer and player score
let playerScore = 0;
let compScore = 0;

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
    return "It is a tie!";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It is a tie!";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "It is a tie!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    compScore++;
    return "You lost! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    compScore++;
    return "You lost! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    compScore++;
    return "You lost! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You won! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You won! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You won! Scissors beats Paper";
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Type here your choice",
      "Rock,Paper or Scissors"
    ).toLowerCase();
    const computerSelection = computerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }

  if (playerScore > compScore) {
    return "You won!!You are genious!";
  } else if (compScore > playerScore) {
    return "You lost!! Try Again";
  } else {
    return "You tied!!";
  }
};

console.log(game());
