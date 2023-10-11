const redButtonOne = document.querySelector('.red1')
const greenButtonOne = document.querySelector('.green1')
const blueButtonOne = document.querySelector('blue1')
const yellowButtonOne = document.querySelector('yellow1')
const redButtonTwo = document.querySelector('.red2')
const greenButtonTwo = document.querySelector('.green2')
const blueButtonTwo = document.querySelector('blue2')
const yellowButtonTwo = document.querySelector('yellow2')
const redButtonThree = document.querySelector('.red3')
const greenButtonThree = document.querySelector('.green3')
const blueButtonThree = document.querySelector('blue3')
const yellowButtonThree = document.querySelector('yellow3')
const allButtons = document.querySelector('.color-buttons')
const topButtons = document.querySelector('.top-row')
const midButtons = document.querySelector('.mid-row')
const bottomButtons = document.querySelector('.bottom-row')
const levelReader = document.querySelector('#level')
const pointsReader = document.querySelector('#points')

const playButtons = []
const playerOrder = []
let playerTurn = true

function flashRedOne() {
    if (playerTurn = true) {
        redButtonOne.style.backgroundColor = "orangered"
    }
}
function flashGreenOne() {
    if (playerTurn = true) {
        greenButtonOne.style.backgroundColor = "chartreuse"
    }
}
function flashBlueOne() {
    if (playerTurn = true) {
        blueButtonOne.style.backgroundColor = "aqua"
    }
}
function flashYellowOne() {
    if (playerTurn = true) {
        yellowButtonOne.style.backgroundColor = "yellow"
    }
}

function flashRedTwo() {
    if (playerTurn = true) {
        redButtonTwo.style.backgroundColor = "orangered"
    }
}
function flashGreenTwo() {
    if (playerTurn = true) {
        greenButtonTwo.style.backgroundColor = "chartreuse"
    }
}
function flashBlueTwo() {
    if (playerTurn = true) {
        blueButtonTwo.style.backgroundColor = "aqua"
    }
}
function flashYellowTwo() {
    if (playerTurn = true) {
        yellowButtonTwo.style.backgroundColor = "yellow"
    }
}

function flashRedThree() {
    if (playerTurn = true) {
        redButtonThree.style.backgroundColor = "orangered"
    }
}
function flashGreenThree() {
    if (playerTurn = true) {
        greenButtonThree.style.backgroundColor = "chartreuse"
    }
}
function flashBlueThree() {
    if (playerTurn = true) {
        blueButtonThree.style.backgroundColor = "aqua"
    }
}
function flashYellowThree() {
    if (playerTurn = true) {
        yellowButtonThree.style.backgroundColor = "yellow"
    }
}

redButtonOne.addEventListener('click', () => {
    flashRedOne()
})



