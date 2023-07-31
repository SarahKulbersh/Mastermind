let textName = document.getElementById("textName")
let myBtn = document.getElementById("button")
myBtn.addEventListener("click", f_click)

function f_click() {
    //User must input his name 
    if (textName.value == "")
        textName.focus()
    else {
        //New names and passwords are kept in local storage
        if (localStorage.getItem(textName.value) == null)
            localStorage.setItem("name", textName.value)
        window.location = "menu.html"
    }
}