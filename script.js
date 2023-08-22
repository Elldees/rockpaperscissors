/**
 * @title Rock, Paper, Scissors
 * @author YSL
 *
 * This program is to play rock paper scissors against the computer.
 * There are 3 possible selections for both the player and the computer:
 *  1. Rock
 *  2. Paper
 *  3. Scissors.
 * These must be variables.
 *
 * Somewhere the win conditions must be established:
 *  1. Rock > Scissors
 *  2. Scissors > Paper
 *  3. Paper > Rock
 * With the last outcome being a draw.
 *  4. Rock == Rock, Scissors == Scissors, Paper == Scissors
 *
 * So in total there are 3 objective outcomes:
 *  1. Win
 *  2. Loss
 *  3. Draw/Tie
 *
 * @notice There must be a way for the computer to randomly select one of the 3 options available. Use random number ranges? Math.random and separate it into 1/3.
 * Could be a separate function for selecting the computer output which is then put into the function for determining the winner.
 */

const rock = "rock";
const scissors = "scissors";
const paper = "paper";

function computerSelection() {
  let computerNumber = Math.random();
  let computerHand;
  if (computerNumber <= 1 / 3) {
    computerHand = rock;
  } else if (computerNumber >= 2 / 3) {
    computerHand = scissors;
  } else {
    computerHand = paper;
  }
  return computerHand;
}
function playerSelection() {
  let playerHand;
  while (true) {
    playerHand = prompt(
      "Pick your hand: 'Rock', 'Paper' or 'Scissors'! Or press 'q' to quit."
    );

    if (playerHand === null) {
      console.log("Player quit game");
      break;
    }

    playerHand = playerHand.toLowerCase();

    if (playerHand == rock || playerHand == paper || playerHand == scissors) {
      break;
    } else if (playerHand == "q") {
      playerHand == null;
      break;
    } else {
      alert("Error: Please pick a valid input.");
    }
  }
  return playerHand;
}
function gameLogic(playerSelection, computerSelection) {
  if (
    (playerSelection == rock && computerSelection == scissors) ||
    (playerSelection == paper && computerSelection == rock) ||
    (playerSelection == scissors && computerSelection == paper)
  ) {
    return true;
  } else {
    return false;
  }
}
function runGameLogic(playerHand, computerHand) {
  if (gameLogic(playerHand, computerHand)) {
    console.log("You win!");
  } else if (playerHand == computerHand) {
    console.log("It's a tie");
  } else {
    console.log("You lose");
  }
}
function runGame() {
  let computerHand;
  let playerHand;
  for (let i = 0; i < 5; i++) {
    computerHand = computerSelection();
    playerHand = playerSelection();
    console.log(
      "Your hand: " + playerHand + " vs Computer hand: " + computerHand + ""
    );
    runGameLogic(playerHand, computerHand);
  }
}
runGame();

function testComputerselection(n) {
  let computerTest;
  let paperCounter = 0;
  let rockCounter = 0;
  let scissorsCounter = 0;
  for (let i = 0; i < n; i++) {
    computerTest = computerSelection();
    console.log(computerTest);
    if (computerTest == "rock") {
      rockCounter++;
    } else if (computerTest == "paper") {
      paperCounter++;
    } else {
      scissorsCounter++;
    }
  }
  return (
    "Paper:" +
    paperCounter +
    ", Scissors:" +
    scissorsCounter +
    ", Rock:" +
    rockCounter +
    ""
  );
}
