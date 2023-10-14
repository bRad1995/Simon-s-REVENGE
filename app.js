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

startButton.addEventListener('click', () => {
    if (compTurn == true || gameWin == true) {
        playGame()
    }
})

function playGame() {
    playerTurn = false

    if (compTurn == true){
        intervalID = setInterval(compChooseButtons, 1000)
        compOrder.push(compChooseButtons)
        playerTurn = true
        compTurn = false
    }
    }
function playerClick() {
    for (let i = 0; i < playerOrder.length; i++) {
        if (compOrder[i] !== playerOrder[i]) {
            alert("Game Over!")
        } else (compOrder[i] === playerOrder[i]) 
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

const compChooseButtons = () => {
    const buttons = [flashRedOne, flashGreenOne, flashBlueOne, flashYellowOne,
    flashRedTwo, flashGreenTwo, flashBlueTwo, flashYellowTwo,
    flashRedThree, flashGreenThree, flashBlueThree, flashYellowThree]
    buttons[Math.floor(Math.random() * buttons.length)]()

}
// setInterval(compChooseButtons, 1000)


redButtonOne.addEventListener('click', () => {
    flashRedOne()
})

greenButtonOne.addEventListener('click', () => {
    flashGreenOne()
})

blueButtonOne.addEventListener('click', () => {
    flashBlueOne()
})

yellowButtonOne.addEventListener('click', () => {
    flashYellowOne()
})

redButtonTwo.addEventListener('click', () => {
    flashRedTwo()
})

greenButtonTwo.addEventListener('click', () => {
    flashGreenTwo()
})

blueButtonTwo.addEventListener('click', () => {
    flashBlueTwo()
})

yellowButtonTwo.addEventListener('click', () => {
    flashYellowTwo()
})
redButtonThree.addEventListener('click', () => {
    flashRedThree()
})

greenButtonThree.addEventListener('click', () => {
    flashGreenThree()
})

blueButtonThree.addEventListener('click', () => {
    flashBlueThree()
})

yellowButtonThree.addEventListener('click', () => {
    flashYellowThree()
})
