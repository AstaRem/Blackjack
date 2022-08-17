
let firstCard = 11
let secondCard = 11
let sum = firstCard + secondCard 
let hasBlackjack = false
let isAlive = true
let message = ""
console.log(sum)

if(sum <= 20) {
    message = "Would you like to draw another card?"
} else if(sum === 21){
    message = "You have got Blackjack!!!"
    hasBlackjack = true
} else {
    message = "You are out of game."
    isAlive = false
}
console.log(message)
console.log(`Your status of staying in game is: ${isAlive}` )

