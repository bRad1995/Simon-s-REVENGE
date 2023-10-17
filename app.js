const redButtonOne = document.querySelector('.red1')
const greenButtonOne = document.querySelector('.green1')
const blueButtonOne = document.querySelector('.blue1')
const yellowButtonOne = document.querySelector('.yellow1')
const redButtonTwo = document.querySelector('.red2')
const greenButtonTwo = document.querySelector('.green2')
const blueButtonTwo = document.querySelector('.blue2')
const yellowButtonTwo = document.querySelector('.yellow2')
const redButtonThree = document.querySelector('.red3')
const greenButtonThree = document.querySelector('.green3')
const blueButtonThree = document.querySelector('.blue3')
const yellowButtonThree = document.querySelector('.yellow3')
const startButton = document.getElementById('startButton')
const levelReader = document.querySelector('#level')
const pointsReader = document.querySelector('#points')
console.log(startButton)

let playerTurn = false
let compTurn = true
let compOrder = []
let playerOrder = []
let gameWin = false
let currentLevel = 1
let intervalID = null
let counter = 0

startButton.addEventListener('click', () => {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('game-page').style.display = 'block';
    if (compTurn == true || gameWin == true) {
       intervalID = setInterval(compChooseButtons, 1000)
    }
})

const compChooseButtons = () => {
    compTurn = true
    const buttons = [flashRedOne, flashGreenOne, flashBlueOne, flashYellowOne,
        flashRedTwo, flashGreenTwo, flashBlueTwo, flashYellowTwo,
        flashRedThree, flashGreenThree, flashBlueThree, flashYellowThree]
    const flashedButton = buttons[Math.floor(Math.random(2) * buttons.length)]
    flashedButton()
    compOrder.push(flashedButton)
    counter++
    if (counter === 5) {
        clearInterval(intervalID)
        playerTurn = true
        compTurn = false
    }
}
console.log(compChooseButtons)
console.log(compOrder)
console.log(playerOrder)

function playerClick() {
    playerTurn = true
    for (let i = 0; i < playerOrder.length; i++) {
        if (playerOrder[i] !== compOrder[i]) {
            alert("Game Over!")
        } else (playerOrder[i] === compOrder[i]) 
            currentLevel++
            playerTurn = false
            compTurn = true
    }
}

function flashRedOne() {
    if (playerTurn === true || compTurn === true) {
        redButtonOne.style.backgroundColor = "orangered"
        setTimeout(() => redButtonOne.style.backgroundColor = "darkred", 500)

    }
}
function flashGreenOne() {
    if (playerTurn === true || compTurn === true) {
        greenButtonOne.style.backgroundColor = "chartreuse"
        setTimeout(() => greenButtonOne.style.backgroundColor = "darkgreen", 500)
    }
}
function flashBlueOne() {
    if (playerTurn === true || compTurn === true) {
        blueButtonOne.style.backgroundColor = "aqua"
        setTimeout(() => blueButtonOne.style.backgroundColor = "darkblue", 500)
    }
}
function flashYellowOne() {
    if (playerTurn === true || compTurn === true) {
        yellowButtonOne.style.backgroundColor = "yellow"
        setTimeout(() => yellowButtonOne.style.backgroundColor = "darkgoldenrod", 500)
    }
}
function flashRedTwo() {
    if (playerTurn === true || compTurn === true) {
        redButtonTwo.style.backgroundColor = "orangered"
        setTimeout(() => redButtonTwo.style.backgroundColor = "darkred", 500)
    }
}
function flashGreenTwo() {
    if (playerTurn === true || compTurn === true) {
        greenButtonTwo.style.backgroundColor = "chartreuse"
        setTimeout(() => greenButtonTwo.style.backgroundColor = "darkgreen", 500)
    }
}
function flashBlueTwo() {
    if (playerTurn === true || compTurn === true) {
        blueButtonTwo.style.backgroundColor = "aqua"
        setTimeout(() => blueButtonTwo.style.backgroundColor = "darkblue", 500)
    }
}
function flashYellowTwo() {
    if (playerTurn === true || compTurn === true) {
        yellowButtonTwo.style.backgroundColor = "yellow"
        setTimeout(() => yellowButtonTwo.style.backgroundColor = "darkgoldenrod", 500)
    }
}
function flashRedThree() {
    if (playerTurn === true || compTurn === true) {
        redButtonThree.style.backgroundColor = "orangered"
        setTimeout(() => redButtonThree.style.backgroundColor = "darkred", 500)
    }
}
function flashGreenThree() {
    if (playerTurn === true || compTurn === true) {
        greenButtonThree.style.backgroundColor = "chartreuse"
        setTimeout(() => greenButtonThree.style.backgroundColor = "darkgreen", 500)
    }
}
function flashBlueThree() {
    if (playerTurn === true || compTurn === true) {
        blueButtonThree.style.backgroundColor = "aqua"
        setTimeout(() => blueButtonThree.style.backgroundColor = "darkblue", 500)
    }
}
function flashYellowThree() {
    if (playerTurn === true || compTurn === true) {
        yellowButtonThree.style.backgroundColor = "yellow"
        setTimeout(() => yellowButtonThree.style.backgroundColor = "darkgoldenrod", 500)
    }
}

redButtonOne.addEventListener('click', () => {
    flashRedOne()
    playerOrder.push(flashRedOne)
})

greenButtonOne.addEventListener('click', () => {
    flashGreenOne()
    playerOrder.push(flashGreenOne)
})

blueButtonOne.addEventListener('click', () => {
    flashBlueOne()
    playerOrder.push(flashBlueOne)
})

yellowButtonOne.addEventListener('click', () => {
    flashYellowOne()
    playerOrder.push(flashYellowOne)
})

redButtonTwo.addEventListener('click', () => {
    flashRedTwo()
    playerOrder.push(flashRedTwo)
})

greenButtonTwo.addEventListener('click', () => {
    flashGreenTwo()
    playerOrder.push(flashGreenTwo)
})

blueButtonTwo.addEventListener('click', () => {
    flashBlueTwo()
    playerOrder.push(flashBlueTwo)
})

yellowButtonTwo.addEventListener('click', () => {
    flashYellowTwo()
    playerOrder.push(flashYellowTwo)
})
redButtonThree.addEventListener('click', () => {
    flashRedThree()
    playerOrder.push(flashRedThree)
})

greenButtonThree.addEventListener('click', () => {
    flashGreenThree()
    playerOrder.push(flashGreenThree)
})

blueButtonThree.addEventListener('click', () => {
    flashBlueThree()
    playerOrder.push(flashBlueThree)
})

yellowButtonThree.addEventListener('click', () => {
    flashYellowThree()
    playerOrder.push(flashYellowThree)
})
