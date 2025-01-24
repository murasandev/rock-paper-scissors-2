let computerNumber, userNumber;
let userInput;

// Generate random number from 1-3
//Assign each value rock paper or scissor
//Get input from user
// increment winner score
playRound();

function calcRandomNumber(min, max){
    computerNumber = Math.floor(Math.random() * (max - min) + min);
}

//calls calcRandomNumber and checks value
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

//gets user Input and assigns value in checkUserInput function
function getUserInput(){
    userInput = prompt("Rock, Paper, or Scissors?","3, 2, 1! Shoot!").toLowerCase();
    checkUserInput();
}

function checkUserInput(){
    switch (userInput){
        case 'rock':
            userNumber = 0;
            console.log(`User Selected ${userNumber}`);
            break;
        case 'paper':
            userNumber = 1;
            console.log(`User Selected ${userNumber}`);
            break;
        case 'scissors':
            userNumber = 2;
            console.log(`User Selected ${userNumber}`);
            break;
        default:
            console.log('Input not valid, try again');
            getUserInput();
            break;
    }
}

function playRound(){
    getUserInput();
    checkComputerChoice();
}