function getComputerChoice() {
    const answerList = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * answerList.length)
    const randomItem = answerList[randomIndex];
    return randomItem
}

function getHumanChoice() {
    const buttonsContainer = document.querySelector('.btns')
    buttonsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('rock')) humanChoice = 'rock';
        else if (e.target.classList.contains('paper')) humanChoice = 'paper';
        else if (e.target.classList.contains('scissors')) humanChoice = 'scissors';
    })
}


let computerScore = 0
let humanScore = 0

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
  
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

    console.log("Human Choice: " + humanChoice)
    console.log("Computer Choice: " + computerChoice)
    
    console.log("Human Score: " + humanScore)
    console.log("Computer Score: " + computerScore)

    return humanChoice
}

function playGame() {
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    while (humanChoice.toLowerCase() != 'q') {
        playRound(humanChoice, computerChoice)
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()
    }
}

playGame()