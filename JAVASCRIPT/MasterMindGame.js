let countTurns = 0
let arrColors = ["purple", "#ff1a75", "#ff6600", "yellow", "#99ffcc", "#0099ff"]
// every 4 colors the player chooses, there is a hint or a win:
let count = 0
let usersGuessArray = new Array(4)
let indexOfusersGuessArray = 0
let wrongPlacement = 0
let correctGuesse = 0
let randColor = new Array(4)
let checkSec = document.getElementById("hint")
let color1
let color2
let color3
let color4
let lableHello = document.getElementById("lableHello")
let myName = localStorage.getItem("name")
lableHello.textContent = "Will " + myName + " be the name on the gold cup?"

let bestPlayers = document.getElementById("bestPlayers")
bestPlayers.addEventListener("click", f_click)

function f_click() {
    window.location = "best.html"
}

f_newGame()
function f_newGame() {
    color1 = arrColors[Math.round(Math.random() * 6)]
    while (color1 == color2 || color2 == null)
        color2 = arrColors[Math.round(Math.random() * 6)]

    while (color2 == color3 || color3 == color1 || color3 == null)
        color3 = arrColors[Math.round(Math.random() * 6)]

    while (color4 == color1 || color4 == color2 || color4 == color3 || color4 == null)
        color4 = arrColors[Math.round(Math.random() * 6)]

    randColor = [color1, color2, color3, color4]

    let playerGuesses = document.getElementById("playerGuesses")
    for (let index = 1; index <= 40; index++) {
        let playerColor = document.createElement("input")
        playerColor.setAttribute("type", "button")
        playerColor.setAttribute("id", index)
        playerColor.className = "playerChose1"
        playerColor.setAttribute("data-index", index)
        playerGuesses.appendChild(playerColor)
        // 4 buttons in a line
        if (index % 4 == 0) {
            playerGuesses.appendChild(document.createElement("br"))
        }
    }
    //arranges the line of the options of colors
    let sixOptionsOfColors = document.getElementById("sixOptionsOfColors")
    for (let i = 1; i <= 6; i++) {
        let colorOption = document.createElement("input")
        colorOption.setAttribute("type", "button")
        colorOption.setAttribute("id", "optionColor" + i)
        colorOption.setAttribute("data-color", i - 1)
        colorOption.addEventListener("click", f_choseColor)
        sixOptionsOfColors.appendChild(colorOption)
        playerGuesses.appendChild(document.createElement("br"))
    }
}
function f_choseColor() {
    let color = event.target.getAttribute("data-color")
    // a color cannot be chosen twice, checking that this color wasn't chosen yet
    if (usersGuessArray.indexOf(arrColors[color]) == -1) {
        count++
        document.getElementById(count).style.backgroundColor = arrColors[color]
        usersGuessArray[indexOfusersGuessArray++] = arrColors[color]

        // when user chose 4 colors - check
        if (count % 4 == 0) {
            f_check()
            countTurns++
        }
    }
}


function f_check() {
    correctGuesse = 0
    wrongPlacement = 0
    // if any of the colors exsists in the chosen colors
    for (let i1 = 0; i1 < 4; i1++) {
        if (randColor.indexOf(usersGuessArray[i1]) != -1)
            wrongPlacement++;
        if (randColor.indexOf(usersGuessArray[i1]) == usersGuessArray.indexOf(usersGuessArray[i1]))
            correctGuesse++;
    }
    if (correctGuesse == 4) {
        let myName1 = localStorage.getItem("nameForWin1")
        let myName2 = localStorage.getItem("nameForWin2")
        let myName3 = localStorage.getItem("nameForWin3")

        let textName = localStorage.getItem("name")
        if (countTurns <= 2) {
            localStorage.setItem("nameForWin1", textName)
        }
        else if (countTurns <= 4) {
            localStorage.setItem("nameForWin2", textName)
        }
        else if (countTurns <= 6)
            localStorage.setItem("nameForWin3", textName)

        let youWon = document.getElementById('id01').style.display = 'block'
        let btnNewGame = document.getElementById("btnNewGame")
        btnNewGame.addEventListener("click", f_click2)
        function f_click2() {
            window.location = "MasterMindGame.html"
        }
    }
    else {
        usersGuessArray = []

        //prints the hint: if there were wrongPlacemnt, correctGuess
        for (let i3 = 0; i3 < wrongPlacement - correctGuesse; i3++) {
            let hint = document.createElement("input")
            hint.setAttribute("type", "button")
            hint.style.backgroundColor = 'white'
            hint.setAttribute("id", "whitePoint")
            checkSec.appendChild(hint)
        }
        for (let i3 = 0; i3 < correctGuesse; i3++) {
            let hint = document.createElement("input")
            hint.setAttribute("type", "button")
            hint.style.backgroundColor = 'black'
            hint.setAttribute("id", "blackPoint")
            checkSec.appendChild(hint)
            if (i3 == correctGuesse - 1)
                checkSec.appendChild(document.createElement("br"))

        }
        if (correctGuesse == 0)
            checkSec.appendChild(document.createElement("br"))
        indexOfusersGuessArray = 0
    }
}

// for game instructions
function openNav() {
    document.getElementById("mySidepanel").style.width = "330px";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

// for a win
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
