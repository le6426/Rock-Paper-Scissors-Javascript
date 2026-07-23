function getComputerChoice() {
    const answerList = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * answerList.length)
    const randomItem = answerList[randomIndex];


    return randomItem
}

let computerScore = 0
let humanScore = 0

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'rock') {
        if (computerChoice == 'rock') {

        }
        else if (computerChoice == 'paper') {
            computerScore++
        }
        else if (computerChoice == 'scissors') {
            humanScore++
        }

    } else if (humanChoice == 'paper') {
        if (computerChoice == 'rock') {
            humanScore++
        }
        else if (computerChoice == 'paper') {

        }
        else if (computerChoice == 'scissors') {
            computerScore++
        }
    } else if (humanChoice == 'scissors') {
        if (computerChoice == 'rock') {
            computerScore++
        }
        else if (computerChoice == 'paper') {
            humanScore++
        }
        else if (computerChoice == 'scissors') {

        }
    }

    const yourScoreText = document.querySelector('.your-score');
    const computerScoreText = document.querySelector('.computer-score');

    yourScoreText.textContent = `Your Score: ${humanScore}`;
    computerScoreText.textContent = `Computer Score: ${computerScore}`;

}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function playGame() {
    const buttonsContainer = document.querySelector('.human-side')
    let humanChoice;

    rockSelector = document.querySelector('.rock')
    paperSelector = document.querySelector('.paper')
    scissorsSelector = document.querySelector('.scissors')




    buttonsContainer.addEventListener('click', async (e) => {

        if (e.target.classList.contains('rock')) {
            humanChoice = 'rock'
            paperSelector.style.opacity = 0;
            scissorsSelector.style.opacity = 0;
        }
        else if (e.target.classList.contains('paper')) {
            humanChoice = 'paper'
            rockSelector.style.opacity = 0;
            scissorsSelector.style.opacity = 0;
        }
        else if (e.target.classList.contains('scissors')) {
            humanChoice = 'scissors'
            rockSelector.style.opacity = 0;
            paperSelector.style.opacity = 0;
        };

        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)

        const computerRockSelector = document.querySelector('.computer-rock');
        const computerPaperSelector = document.querySelector('.computer-paper');
        const computerScissorsSelector = document.querySelector('.computer-scissors');
        if (computerChoice == 'rock') {
            computerPaperSelector.style.opacity = 0;
            computerScissorsSelector.style.opacity = 0;
        }
        else if (computerChoice == 'paper') {
            computerRockSelector.style.opacity = 0;
            computerScissorsSelector.style.opacity = 0;
        }
        else if (computerChoice == 'scissors') {
            computerRockSelector.style.opacity = 0;
            computerPaperSelector.style.opacity = 0;
        }
        await delay(750)

        rockSelector.style.opacity = '1';
        paperSelector.style.opacity = '1';
        scissorsSelector.style.opacity = '1';

        computerRockSelector.style.opacity = '1';
        computerPaperSelector.style.opacity = '1';
        computerScissorsSelector.style.opacity = '1';
    })

}


playGame()