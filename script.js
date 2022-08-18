
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let player = {
    name: "Per",
    chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = `${player.name}: $${player.chips}`


function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 11){
        return 1
    } else if (randomNumber > 10 ){
        return 10
    } else {
        return randomNumber
    }
}


function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard 
    renderGame()
}

function renderGame(){
    cardsEl.textContent = `Cards: `
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += ` ${cards[i]}  `
    }
    sumEl.textContent = `Sum: ${sum}`
    if(sum <= 20) {
        message = "Would you like to draw another card?"
    } else if(sum === 21){
        message = "You've got a Blackjack!!!"
        hasBlackjack = true
    } else {
        message = "You are out of game."
        isAlive = false
    }   
    messageEl.textContent = message

    console.log(message)
    console.log(`Your status of staying in game is: ${isAlive}` )

}


function newCard(){
    if(isAlive === true && hasBlackjack === false){
        let anotherCard = getRandomCard()
        sum += anotherCard
        cards.push(anotherCard)
        renderGame()
    
    }
}

