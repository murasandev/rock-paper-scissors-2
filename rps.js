let computerNumber;
let userInput;

// Generate random number from 1-3
//Assign each value rock paper or scissor
//Get input from user
// increment winner score
getUserInput();
checkComputerChoice();

function calcRandomNumber(min, max){
    computerNumber = Math.floor(Math.random() * (max - min) + min);
}

function checkComputerChoice(){
    calcRandomNumber(0, 3);

    switch(computerNumber){
        case 0:
            console.log(`Rock: ${computerNumber}`);
            break;
        case 1:
            console.log(`Paper ${computerNumber}`);
            break;
        case 2:
            console.log(`Scissors ${computerNumber}`);
            break;
    }
}

function getUserInput(){
    userInput = prompt("Rock, Paper, or Scissors?","3, 2, 1! Shoot!");
}