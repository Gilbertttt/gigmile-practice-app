
// let RockPaperScissors = () => {
//   let playGame = window.confirm("Rock, Paper or Scissors")
// if(playGame) {
// let playerChoice = prompt ('Rock, Paper or Scissors')
// console.log(playerChoice)
// if(playerChoice) {
//  let playerOne = playerChoice.trim().toLowerCase();
//  if(
//    playerOne === "Rock" ||
//      playerOne === "Paper" || 
//      playerOne === "Scissors"
//     ) 
//     {
// let computerChoice = Math.floor(Math.random() * 3 + 1)
// console.log(computerChoice);
// let computer = 
// computerChoice === 1 ? 
// "Rock":
// computerChoice === 2 ? 
// "Paper": 
// "Scissors";
//   let result = playerOne === computer ? 
//   "This is a Tie": 
//    playerChoice === "Rock" && computerChoice === "Paper"? 
//    `${computerChoice} Wins`:
//    playerChoice === "Paper" && computerChoice === "Rock"?  
//    `${playerChoice} Wins`:
//    playerChoice === "Scissors" && computerChoice === "Paper"? 
//    `${playerChoice} Wins`: 
//    playerChoice === "Scissors" && computerChoice === "Rock"? 
//    `${computerChoice} Wins`:
//    "Opps nothing here, We'll play again some other time";

//    alert(result)
//  } else
//    console.log("We'll try again next time")
// } 

// }

// }

// export default RockPaperScissors


import React from 'react'

const RockPaperScissors = () => {
const playerName = () => {
  let playerName = prompt ("Enter your name Player")
}

// Game Flow Structure
let playGame = () => {
  playerName();

  const playerChoice = () => {
  if(playerChoice) {
   let player = window.confirm("Rock, Paper, Scissors")
  } else {
     window.confirm("Okay then, Some other time")
  }
}

const continueAgain = () => {
   Location.reload();
 }
const computerChoice = () => {
  playerChoice();

  let computerChoice = Math.floor(Math.random() * 3 + 1)
  let computer = 
  computerChoice === 1? "Rock":
  computerChoice === 2? "Paper": 
  "Scissors";
}

if (playerChoice === computerChoice){
  prompt("Tie Game, Want to try again")
  continueAgain();
} if(playerChoice === "Rock" && computerChoice === "Paper") {
  prompt("Computer wins")
}
if(playerChoice === "Paper" && computerChoice === "Rock") {
  prompt("Player wins")
} 
if(playerChoice === "Scissors" && computerChoice === "Rock") {
  prompt("computer wins")
} 

}
  return (
    <div>
      
    </div>
  )
}

export default RockPaperScissors





