function computerPlay (){
    const elements = ["Rock", "Paper", "Scissors"];

    const randomElement = elements[Math.floor(Math.random() * elements.length)];

    return randomElement;
}

function playRound (playerSelection, computerSelection){
    let playerWins;
    let roundStatus;
    const roundArray = [];

    if(playerSelection == "Paper"){
        switch(computerSelection){
            case "Scissors":
                playerWins = false;
                break;
            case "Rock":
                playerWins = true;
                break;
            break;
        }
    }

    if(playerSelection == "Rock"){
        switch(computerSelection){
            case "Scissors":
                playerWins = true;
                break;
            case "Paper":
                playerWins = false;
                break;
            break;
        }
    }

    if(playerSelection == "Scissors"){
        switch(computerSelection){
            case "Rock":
                playerWins = false;
                break;
            case "Paper":
                playerWins = true;
                break;
            break;
        }
    }
    
    if (playerWins){
        roundStatus = "Win";
    }else if (playerWins == false){
        roundStatus = "Lost";
    }else{
        roundStatus = "Draw";
    }

    roundArray.push(roundStatus, playerSelection, computerSelection);
    return roundArray;
}

function displayRoundResults(roundArray, roundStatus){
    if(roundArray[0] == "Win"){
        roundStatus = "You Win! " + roundArray[1] + " beats " + roundArray[2];
        playerScore++;
    }else if (roundArray[0] == "Lost"){
        roundStatus = "You Lose! " + roundArray[2] + " beats " + roundArray[1];
        computerScore++;
    }else{
        roundStatus = "Draw!";
    }
    gameScreen.textContent = roundStatus;


}

function displayGameResults(){
    let gameResult = '';

    if(playerScore > computerScore){
        gameResult = "You won the game! ";
    }else if(computerScore > playerScore){
        gameResult = "You lost the game! ";
    }else{
        gameResult = "Draw. ";
    }
    setTimeout(function () {
        gameScreen.textContent = gameResult;
        buttonsContainer.style.display = 'none';
        restartContainer.style.display = 'flex';
    }, 250);

}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const buttonsContainer = document.querySelector("#buttonsContainer");
const restartContainer = document.querySelector("#restartContainer");
const playerScoreDisplay = document.querySelector("#playerScoreDisplay");
const computerScoreDisplay = document.querySelector("#computerScoreDisplay");

const gameScreen = document.querySelector("#gameScreen");
const resultsScreen = document.querySelector("#resultsScreen");
const buttons = [rockButton, paperButton, scissorsButton];
let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', function(){
        const roundArray = playRound(button.dataset.element, computerPlay());
        let roundStatus = '';

        displayRoundResults(roundArray, roundStatus);

        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;

        if(playerScore==5 || computerScore==5){
            displayGameResults();
        }   
    });
});

document.querySelector("#restartButton").addEventListener('click', function(){
    playerScore = 0;
    computerScore = 0;
    gameScreen.textContent = 'Rock, paper or scissors?';
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    restartContainer.style.display = 'none';
    buttonsContainer.style.display = 'flex';
});
