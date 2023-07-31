let lableHello =document.getElementById("lableHello")
let myName = localStorage.getItem("name")
lableHello.textContent = "Hello "+ myName+"! Which game would you like to play?"

let MasterMindGameBtn=document.getElementById("MasterMindGameBtn")
MasterMindGameBtn.addEventListener("click",f_click)

function f_click(){
    window.location="MasterMindGame.html"
}

let gameNotAvailable=document.getElementById("gameNotAvailable")
gameNotAvailable.addEventListener("click",f_click2)

let gameNotAvailable1=document.getElementById("gameNotAvailable1")
gameNotAvailable1.addEventListener("click",f_click2)

function f_click2(){
    window.location="gamenot.html"
}