let computerNumber;
let userInput;
let computerChoice, userChoice;
let computerScore, userScore;

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
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors'
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
            userChoice = 'rock';
            break;
        case 'paper':
            userChoice = 'paper'
            break;
        case 'scissors':
            userChoice = 'scissors';
            break;
        default:
            console.log('Input not valid, try again');
            getUserInput();
            break;
    }
}

function compareChoice(){
    if(computerChoice == userChoice){
        console.log(`Round tied! Computer played ${computerChoice}. You played ${userChoice}`);
    }
    else {
        if(computerChoice == 'rock') {
            switch (userChoice){
                case 'paper':
                    userScore++;
                    break;
                case 'scissors':
                    computerScore++
                    break;
            }
        }
        else if(computerChoice == 'paper'){
            switch (userChoice){
                case 'rock':
                    computerScore++;
                    break;
                case 'scissors':
                    userScore++;
                    break;
            }
        }
        else if (computerChoice == 'scissors'){
            switch (userChoice){
                case 'rock':
                    user++;
                    break;
                case 'paper':
                    computerScore++;
                    break;
            }
        }
    }
}

function playRound(){
    getUserInput();
    checkComputerChoice();
}