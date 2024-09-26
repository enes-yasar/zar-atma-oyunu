let firstDice = document.querySelector('#first-dice')
let secondDice = document.querySelector('#second-dice')
let dice = document.querySelector('#dice')



dice.addEventListener('click', () => {
    let firstDiceValue = Math.ceil(Math.random() * 6)
    let secondDiceValue = Math.ceil(Math.random() * 6)
    firstDice.src = `image/dice-${firstDiceValue}.png`
    secondDice.src = `image/dice-${secondDiceValue}.png`
})