const gameBtn = document.querySelectorAll('.game-tiles-box div')
const resultModal = document.querySelector('.web-result-container')
const textModal = document.querySelector('.result-place h3')
const btnModal = document.querySelector('.results-btn-hidde')
const mainScore = document.querySelector('.score')


let computerChoice = ''
let computerScore = 0
let userChoice = ''
let userScore = 0
let gameInfo = null;



const HandleGame = event => {

    const target = event.target
    let random = Math.floor(Math.random(3) * 3 + 1)
    
    mainScore.textContent = userScore

    if(random === 1){computerChoice = 'paper'}
    else if(random === 2){computerChoice = 'rock'}
    else if(random === 3){computerChoice = 'scissors'}
   
    if(target.id === 'paper' || target.id === 'paper-img'){
        userChoice = 'paper'
    } else if(target.id === 'rock' || target.id === 'rock-img'){
        userChoice = 'rock'
    } else if(target.id === 'scissors' || target.id === 'scissors-img'){
        userChoice = 'scissors'
    }

    
 
    //win option for user
    if(userChoice === 'paper' && computerChoice === 'rock'){
      
        gameInfo = true
    }
    else if(userChoice === 'rock' && computerChoice === 'scissors'){
        
        gameInfo = true
    }
    else if(userChoice === 'scissors' && computerChoice === 'paper'){
        
        gameInfo = true
    }
    //win option for pc
    else if(userChoice === 'paper' && computerChoice === 'scissors'){
        
        gameInfo = false
    }
    else if(userChoice === 'rock' && computerChoice === 'paper'){
       
        gameInfo = false
    }
    else if(userChoice === 'scissors' && computerChoice === 'rock'){
        
        gameInfo = false
    } else {
        gameInfo = 'nobody don t won'
    }

    if(gameInfo === true){
        resultModal.classList.add('modal-active')
        textModal.textContent = 'You win !'
        userScore += 1
    }
    else if(gameInfo === false){
        resultModal.classList.add('modal-active')
        computerScore ++
        textModal.textContent = 'Computer win !'
    }
    else if(gameInfo === 'nobody don t won'){
        resultModal.classList.add('modal-active')
        textModal.textContent = 'Is draw !'
    }

    if(mainScore.textContent === '3'){
        resultModal.classList.add('modal-active')
        textModal.textContent = 'You are winner !'
        btnModal.textContent = 'New game'
        
    } else if(computerScore === 3){
        resultModal.classList.add('modal-active')
        textModal.textContent = 'Comupter is a winner !'
        btnModal.textContent = 'New game'
    }
 
   
}

const hiddenResultsModal = () => {
    resultModal.classList.remove('modal-active')
    textModal.textContent = 'null'
}


gameBtn.forEach(card => {
    card.addEventListener('click', HandleGame)
})
btnModal.addEventListener('click', hiddenResultsModal)



