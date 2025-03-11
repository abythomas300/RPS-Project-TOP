var humanScore = 0;
var computerScore = 0;
var roundCount = 0;

function askRoundCount(){
    var roundCount = prompt("How many rounds are you willing to play?");
    return roundCount;
}

function getHumanChoice(){
    let humanChoice = prompt("ROUND "+x+": Rock, Paper or Scissors?");
    console.log("HUMAN SELECTION:"+humanChoice.toLowerCase());
    return humanChoice;
}

function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    console.log("COMPUTER'S SELECTION:"+computerChoice.toLowerCase());
    return computerChoice;
}

function playRound(humanChoice, computerChoice){
    var h = humanChoice.toLowerCase();
    var c = computerChoice.toLowerCase();

    if(h === c){
        console.log("It's a Tie. No change in score");
    }else if( (h === "rock" && c === "scissors")  ||  (h === "paper" && c === "rock") || (h === "scissor")&&(c === "paper") ){
      humanScore++;
    }else{
        computerScore++;
    }

}

function displayScore(){
    console.log("\n----- SCORE BOARD -----")  ;
    console.log("HUMAN-> "+humanScore);
    console.log("COMPUTER-> "+computerScore);
}

function announceWinner(){
    if (humanScore === computerScore){
        console.log("It is a tie.");
    }else if(humanScore > computerScore){
        console.log("■ ■ ■ ■ ■ ■ HUMAN WINS BY "+(humanScore - computerScore)+ "POINTS ■ ■ ■ ■ ■ ■");
    }else{
        console.log("■ ■ ■ ■ ■ ■ COMPUTER WINS BY "+(computerScore - humanScore)+" POINTS ■ ■ ■ ■ ■ ■");
    }
}


// CODE EXECUTION STARTS FROM HERE
const finalRoundCount = askRoundCount();
console.log("***STARTING GAME***");
var x = 1; // current round number

while(x <= finalRoundCount){
    console.log("Round:"+x+" Starts");
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    x++;
}
displayScore();
announceWinner();




