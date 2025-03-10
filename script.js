var humanScore = 0;
var computerScore = 0;

function getHumanChoice(){
    let humanInput = prompt("Rock, Paper or Scissors?");
    console.log("HUMAN SELECT:"+humanInput);
}

function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let selectedChoice = choices[Math.floor(Math.random()*choices.length)];
    console.log("COMPUTER'S SELECTION:"+selectedChoice);
}

getHumanChoice();
getComputerChoice();
