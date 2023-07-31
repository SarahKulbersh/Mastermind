let winA = document.getElementById("win1")
let winB = document.getElementById("win2")
let winC = document.getElementById("win3")

let myName1 = localStorage.getItem("nameForWin1")
let myName2= localStorage.getItem("nameForWin2")
let myName3 = localStorage.getItem("nameForWin3")

winA.textContent=myName1
winB.textContent=myName2
winC.textContent=myName3