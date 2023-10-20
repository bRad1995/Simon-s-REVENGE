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
let currentLevel = 1
let points = 0
let intervalID = null
let counter = 0
let playerCounter = 0

startButton.addEventListener('click', () => {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('game-page').style.display = 'block';
    if (compTurn == true) {
       intervalID = setInterval(compChooseButtons, 1000)
    }
})

const compChooseButtons = () => {
    compTurn = true
    const buttons = [flashRedOne, flashGreenOne, flashBlueOne, flashYellowOne,
        flashRedTwo, flashGreenTwo, flashBlueTwo, flashYellowTwo,
        flashRedThree, flashGreenThree, flashBlueThree, flashYellowThree]
    const flashedButton = buttons[Math.floor(Math.random() * buttons.length)]
    flashedButton()
    compOrder.push(flashedButton)
    counter++
    if (counter === 5) {
        clearInterval(intervalID)
        playerTurn = true
        compTurn = false
    }
}

function fillPlayerOrder() {
    console.log("fillPlayerOrder")
    console.log(playerCounter)
    if (playerCounter === 5) {
        clearInterval(intervalID)
        playerCheck()
    }
}

function playerCheck() {
    for (let i = 0; i < playerOrder.length; i++) {
        console.log(playerOrder[i], compOrder[i])

        if (playerOrder[i] !== compOrder[i]) {
            const gameAlert = document.querySelector('#gameHeading')
            gameAlert.innerHTML = `GAME OVER!`
            playerTurn = false
            compTurn = true
            compOrder = []
            playerOrder = []
            currentLevel = 1
            points = 0
            intervalID = null
            counter = 0
            playerCounter = 0
            setTimeout(() => {
                document.getElementById('start-page').style.display = 'block'
                document.getElementById('game-page').style.display = 'none'
                gameAlert.innerHTML = `Simon's REVENGE`
                const lessPoints = document.querySelector('#points')
                lessPoints.innerHTML = `POINTS: 0`
                const newLevel = document.querySelector('#level')
                newLevel.innerHTML = `LEVEL: 1`
            }, 5000)
            return
        } 
        else if (playerOrder[i] === compOrder[i]) {
            const morePoints = document.querySelector('#points')
            points++
            morePoints.innerHTML = `POINTS: ${points}`
            playerTurn = false
            compTurn = true
        }
    }
    const newLevel = document.querySelector('#level')
    currentLevel++
    newLevel.innerHTML = `LEVEL: ${currentLevel}`
    counter = 0
    playerCounter = 0
    compOrder = []
    playerOrder = []
        
    if (currentLevel >= 3 && points >= 15) {
        const gameAlert = document.querySelector('#gameHeading')
        gameAlert.innerHTML = `YOU WIN!`
        playerTurn = false
        compTurn = true
        compOrder = []
        playerOrder = []
        currentLevel = 1
        points = 0
        intervalID = null
        counter = 0
        playerCounter = 0
        setTimeout(() => {
            document.getElementById('start-page').style.display = 'block'
            document.getElementById('game-page').style.display = 'none'
            gameAlert.innerHTML = `Simon's REVENGE`
                const lessPoints = document.querySelector('#points')
                lessPoints.innerHTML = `POINTS: 0`
                const newLevel = document.querySelector('#level')
                newLevel.innerHTML = `LEVEL: 1`
        }, 5000)
        return
    }

    if (playerTurn === false && compTurn === true) {
        intervalID = setInterval(compChooseButtons, 1000)
    }
}

function flashRedOne() {
    if (playerTurn === true || compTurn === true) {
        redButtonOne.style.backgroundColor = "orangered"
        setTimeout(() => redButtonOne.style.backgroundColor = "darkred", 500)
        const sound = document.getElementById('buttonSound')
        sound.play()
    }
}
function flashGreenOne() {
    if (playerTurn === true || compTurn === true) {
        greenButtonOne.style.backgroundColor = "chartreuse"
        setTimeout(() => greenButtonOne.style.backgroundColor = "darkgreen", 500)
        const sound = document.getElementById('buttonSound')
        sound.play() 
    }
}
function flashBlueOne() {
    if (playerTurn === true || compTurn === true) {
        blueButtonOne.style.backgroundColor = "aqua"
        setTimeout(() => blueButtonOne.style.backgroundColor = "darkblue", 500)
        const sound = document.getElementById('buttonSound')
        sound.play()
    }
}
function flashYellowOne() {
    if (playerTurn === true || compTurn === true) {
        yellowButtonOne.style.backgroundColor = "yellow"
        setTimeout(() => yellowButtonOne.style.backgroundColor = "darkgoldenrod", 500)
        const sound = document.getElementById('buttonSound')
        sound.play()
    }
}
function flashRedTwo() {
    if (playerTurn === true || compTurn === true) {
        redButtonTwo.style.backgroundColor = "orangered"
        setTimeout(() => redButtonTwo.style.backgroundColor = "darkred", 500)
        const sound = document.getElementById('buttonSound')
        sound.play()
    }
}
function flashGreenTwo() {
    if (playerTurn === true || compTurn === true) {
        greenButtonTwo.style.backgroundColor = "chartreuse"
        setTimeout(() => greenButtonTwo.style.backgroundColor = "darkgreen", 500)
        const sound = document.getElementById('buttonSound')
        sound.play()
    }
}
function flashBlueTwo() {
    if (playerTurn === true || compTurn === true) {
        blueButtonTwo.style.backgroundColor = "aqua"
        setTimeout(() => blueButtonTwo.style.backgroundColor = "darkblue", 500)
        const sound = document.getElementById('buttonSound')
        sound.play()
    }
}
function flashYellowTwo() {
    if (playerTurn === true || compTurn === true) {
        yellowButtonTwo.style.backgroundColor = "yellow"
        setTimeout(() => yellowButtonTwo.style.backgroundColor = "darkgoldenrod", 500)
        const sound = document.getElementById('buttonSound')
        sound.play()
    }
}
function flashRedThree() {
    if (playerTurn === true || compTurn === true) {
        redButtonThree.style.backgroundColor = "orangered"
        setTimeout(() => redButtonThree.style.backgroundColor = "darkred", 500)
        const sound = document.getElementById('buttonSound')
        sound.play()
    }
}
function flashGreenThree() {
    if (playerTurn === true || compTurn === true) {
        greenButtonThree.style.backgroundColor = "chartreuse"
        setTimeout(() => greenButtonThree.style.backgroundColor = "darkgreen", 500)
        const sound = document.getElementById('buttonSound')
        sound.play()
    }
}
function flashBlueThree() {
    if (playerTurn === true || compTurn === true) {
        blueButtonThree.style.backgroundColor = "aqua"
        setTimeout(() => blueButtonThree.style.backgroundColor = "darkblue", 500)
        const sound = document.getElementById('buttonSound')
        sound.play()
    }
}
function flashYellowThree() {
    if (playerTurn === true || compTurn === true) {
        yellowButtonThree.style.backgroundColor = "yellow"
        setTimeout(() => yellowButtonThree.style.backgroundColor = "darkgoldenrod", 500)
        const sound = document.getElementById('buttonSound')
        sound.play()
    }
}

redButtonOne.addEventListener('click', () => { 
    flashRedOne()
    playerOrder.push(flashRedOne)
    playerCounter++
    fillPlayerOrder()
})

greenButtonOne.addEventListener('click', () => {
    flashGreenOne()
    playerOrder.push(flashGreenOne)
    playerCounter++
    fillPlayerOrder()
})

blueButtonOne.addEventListener('click', () => {
    flashBlueOne()
    playerOrder.push(flashBlueOne)
    playerCounter++
    fillPlayerOrder()
})

yellowButtonOne.addEventListener('click', () => {
    flashYellowOne()
    playerOrder.push(flashYellowOne)
    playerCounter++
    fillPlayerOrder()
})

redButtonTwo.addEventListener('click', () => {
    flashRedTwo()
    playerOrder.push(flashRedTwo)
    playerCounter++
    fillPlayerOrder()
})

greenButtonTwo.addEventListener('click', () => {
    flashGreenTwo()
    playerOrder.push(flashGreenTwo)
    playerCounter++
    fillPlayerOrder()
})

blueButtonTwo.addEventListener('click', () => {
    flashBlueTwo()
    playerOrder.push(flashBlueTwo)
    playerCounter++
    fillPlayerOrder()
})

yellowButtonTwo.addEventListener('click', () => {
    flashYellowTwo()
    playerOrder.push(flashYellowTwo)
    playerCounter++
    fillPlayerOrder()
})

redButtonThree.addEventListener('click', () => {
    flashRedThree()
    playerOrder.push(flashRedThree)
    playerCounter++
    fillPlayerOrder()
})

greenButtonThree.addEventListener('click', () => {
    flashGreenThree()
    playerOrder.push(flashGreenThree)
    playerCounter++
    fillPlayerOrder()
})

blueButtonThree.addEventListener('click', () => {
    flashBlueThree()
    playerOrder.push(flashBlueThree)
    playerCounter++
    fillPlayerOrder()
})

yellowButtonThree.addEventListener('click', () => {
    flashYellowThree()
    playerOrder.push(flashYellowThree)
    playerCounter++
    fillPlayerOrder()
})
