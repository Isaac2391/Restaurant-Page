const renderPage = function() {

let body = document.querySelector("body")
let content = document.querySelector("#content")
let navButtons = document.querySelector("#navButtonsBox")

let footer = document.createElement("div")

content.appendChild(footer)

body.style.backgroundColor = "maroon"

content.style.width = "100%"
content.style.height = "100vh"

navButtons.style.backgroundColor = "brown"

navButtons.style.width = "100%"
navButtons.style.height = "10vh"

navButtons.style.position = "fixed"
navButtons.style.top = "0"

navButtons.style.display = "flex"
navButtons.style.flexAlign = "center"
navButtons.style.justifyContent = "center"
navButtons.style.gap = "5%"


footer.style.width = "100%"
footer.style.height = "10vh"

footer.style.color = "white"
footer.style.fontSize = "1.6rem"
footer.style.backgroundColor = "brown"

footer.style.position = "fixed"
footer.style.bottom = "0"
footer.style.left = "0"
footer.style.textAlign = "center"

footer.innerText = "This is one of the most generic restaurants of all time"


let banner = document.createElement("div")
content.appendChild(banner)

banner.style.backgroundColor = "brown"
banner.style.color = "black"
banner.style.outline = "solid 5px black"

banner.style.height = "20vh"
banner.style.width = "40vw"
banner.style.fontSize = "2rem"
banner.style.padding = "2%"
banner.style.borderRadius = "35%"
banner.style.textAlign = "center"
banner.style.fontWeight = "bold"

banner.style.margin = "auto"
banner.style.marginTop = "10%"

banner.innerHTML = "Welcome to The Generic Restaurant!"

}

export {renderPage} 