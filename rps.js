let computerNumber;
let userInput;
let computerChoice, userChoice;
let computerScore = 0;
let userScore = 0;
let totalRounds = 5;

const rockBtn = document.querySelector(".rockBtn");
rockBtn.addEventListener('click', function(){
    userInput = 'rock';
    alert(userInput);
});

const paperBtn = document.querySelector('.paperBtn');
paperBtn.addEventListener('click', function(){
    userInput = 'paper';
    alert(userInput);
});

const scissorsBtn = document.querySelector('.scissorsBtn');
scissorsBtn.addEventListener('click', function(){
    userInput = 'scissors';
    alert(userInput);
});

// playGame();
//when user makes selection
//calculate computer choice
//display user choice and computer choice

function calcRandomNumber(min, max){
    computerNumber = Math.floor(Math.random() * (max - min) + min);
}

function checkComputerChoice(){
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

// function getUserInput(){
//     userInput = prompt("Rock, Paper, or Scissors?","3, 2, 1! Shoot!").toLowerCase();
// }

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
    }
}

function compareChoice(){
    if(computerChoice == userChoice){
        console.log(`Round tied! Computer played ${computerChoice}. You played ${userChoice}.`);
    }
    else {
        if(computerChoice == 'rock') {
            switch (userChoice){
                case 'paper':
                    console.log(`Round Won!!! Computer played ${computerChoice}. You played ${userChoice}.`)
                    userScore++;
                    break;
                case 'scissors':
                    console.log(`Round Lost!!! Computer played ${computerChoice}. You played ${userChoice}.`)
                    computerScore++
                    break;
            }
        }
        else if(computerChoice == 'paper'){
            switch (userChoice){
                case 'rock':
                    console.log(`Round Lost!!! Computer played ${computerChoice}. You played ${userChoice}.`)
                    computerScore++;
                    break;
                case 'scissors':
                    console.log(`Round Won!!! Computer played ${computerChoice}. You played ${userChoice}.`)
                    userScore++;
                    break;
            }
        }
        else if (computerChoice == 'scissors'){
            switch (userChoice){
                case 'rock':
                    console.log(`Round Won!!! Computer played ${computerChoice}. You played ${userChoice}.`)
                    userScore++;
                    break;
                case 'paper':
                    console.log(`Round Lost!!! Computer played ${computerChoice}. You played ${userChoice}.`)
                    computerScore++;
                    break;
            }
        }
    }
}

function getScore(){
    console.log(`Computer: ${computerScore} | User ${userScore}`);
}

function playRound(){
    // while(userInput != 'rock' && userInput != 'paper' && userInput != 'scissors'){
    //     // getUserInput();
    //     if(userInput != 'rock' && userInput != 'paper' && userInput != 'scissors'){
    //         console.log("Invalid Response! Try Again!");
    //     }
    // }
    checkUserInput();
    calcRandomNumber(0, 3);
    checkComputerChoice();
    compareChoice();
    getScore();
    resetUserInput();
}

function playGame(){
    for(let i=0; i < totalRounds; i++){
        console.log(`Round ${i + 1}! Make your pick!`);
        playRound();
    }
}

function resetUserInput(){
    userInput = '';
}