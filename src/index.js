import { renderPage } from "./mainModule.js"
import { renderHome } from "./Home.js"
import { renderMenu } from "./Menu.js"

renderPage()
renderHome()

let homeTab = document.querySelector("#homeButton")
let menuTab = document.querySelector("#menuButton")
let aboutTab = document.querySelector("#aboutButton")
let careersTab = document.querySelector("#careersButton")

homeTab.addEventListener("click", () => { renderHome() })
menuTab.addEventListener("click", () => { renderMenu() })
aboutTab.addEventListener("click", () => { })
careersTab.addEventListener("click", () => { })

