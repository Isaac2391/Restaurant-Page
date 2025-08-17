
let body = document.querySelector("body")
let content = document.querySelector("#content")
let navButtons = document.querySelector("#navButtonsBox")

const renderPage = function() {

let footer = document.createElement("div")

content.appendChild(footer)

body.style.backgroundColor = "maroon"

content.style.width = "100%"
content.style.height = "100vh"

navButtons.style.backgroundColor = "brown"

navButtons.style.width = "100vw"
navButtons.style.height = "8vh"

navButtons.style.position = "fixed"
navButtons.style.top = "0"

navButtons.style.display = "flex"
navButtons.style.flexAlign = "center"
navButtons.style.justifyContent = "center"
navButtons.style.gap = "5%"


footer.style.width = "100vw"
footer.style.height = "4vh"

footer.style.color = "white"
footer.style.fontSize = "1rem"
footer.style.backgroundColor = "brown"

footer.style.position = "fixed"
footer.style.bottom = "0"
footer.style.left = "0"
footer.style.textAlign = "center"

footer.innerText = "This is one of the most generic restaurants of all time"

}

export { renderPage }
