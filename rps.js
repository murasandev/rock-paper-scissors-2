const computerOutput = document.querySelector('.computerOutput');
const computerTitle = document.createElement('h3');

const userOutput = document.querySelector('.userOutput');
const userTitle = document.createElement('h3');

const scoreContainer = document.querySelector('.scoreContainer');
const scoreText = document.createElement('h2');

let computerNumber;
let userInput;
let computerChoice, userChoice;
let computerScore = 0;
let userScore = 0;
let totalRounds = 5;

const rockBtn = document.querySelector(".rockBtn");
rockBtn.addEventListener('click', function(){
    userInput = 'rock';
    
    userTitle.textContent = `You played: ${userInput}`
    userOutput.appendChild(userTitle);

    playGame();
});

const paperBtn = document.querySelector('.paperBtn');
paperBtn.addEventListener('click', function(){
    userInput = 'paper';
    
    userTitle.textContent = `You played: ${userInput}`
    userOutput.appendChild(userTitle);

    playGame();
});

const scissorsBtn = document.querySelector('.scissorsBtn');
scissorsBtn.addEventListener('click', function(){
    userInput = 'scissors';
    
    userTitle.textContent = `You played: ${userInput}`
    userOutput.appendChild(userTitle);

    playGame();
});

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
    computerTitle.textContent = `Your opponent played: ${computerChoice}`;
    computerOutput.appendChild(computerTitle);
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
    scoreText.textContent = `Computer: ${computerScore} | User: ${userScore}`;
    scoreContainer.appendChild(scoreText);
}

function playRound(){
    checkUserInput();
    calcRandomNumber(0, 3);
    checkComputerChoice();
    compareChoice();
    getScore();
    resetUserInput();
}

function playGame(){
    if(computerScore < 5 && userScore < 5){
        playRound();
    }
    else{
        switch (computerScore){
            case 5:
                // computer wins
                scoreText.textContent = `Computer Wins!!! ${computerScore} - ${userScore}`;
                scoreContainer.appendChild(scoreText);
                break;
            default:
                //user wins
                scoreText.textContent = `You Win!!! ${userScore} - ${computerScore}`;
                scoreContainer.appendChild(scoreText);
                break;
        }
    }
}

function resetUserInput(){
    userInput = '';
}