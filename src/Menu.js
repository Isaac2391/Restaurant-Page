import burgerImg from '/src/images/genericBurger.jpg'
import garlicImg from '/src/images/genericGarlicBread.webp'
import jollofImg from '/src/images/genericJollof.jpg'
import mozzImg from '/src/images/genericMozzSticks.jpg'
import pizzaImg from '/src/images/genericPizza.webp'
import soupImg from '/src/images/genericSoup.jpg'

let body = document.querySelector("body")

const images = [burgerImg, garlicImg, jollofImg, mozzImg, pizzaImg, soupImg]

const imageLabels = ["<b>Generic Burger: £10 </b> <br><br> A beautiful combination of generic lettuce, generic seeded bun, generic patty, generic tomato and generic burger sauce, the Generic Burger has been a customer favourite since its inception", 
    "<b>Generic Garlic Bread: £4</b> <br><br> An aromatic side of toasted bread generously smothered in generic garlic butter. Crispy on the outside, fluffy on the inside — the ultimate supporting act to any generic main dish.", 
    "<b>Generic Jollof Rice: £8</b><br><br> A fragrant, vibrant serving of generic long-grain rice simmered in tomato and spice. Accompanied by equally generic plantain and skewers, it delivers comfort and flavour in every generic bite.", 
    "<b>Generic Mozzarella Sticks: £6</b> <br><br> A generous selection of Generic Mozzerella Sticks; breaded, fried and seasoned to perfection, these sides are a perfect compliment to any food item on our generic menu", 
    "<b>Generic Pizza: £12</b><br><br> A timeless classic: a perfectly generic crust layered with tangy tomato sauce, gooey cheese, and an arrangement of equally generic pepperoni slices. Ideal for sharing… or not.", 
    "<b>Generic Soup: £7</b><br><br> A warm bowl of generic vegetable soup with just the right balance of herbs and cream. Pair it with bread for the ultimate generic starter that never goes out of style.",]

const renderMenu = function () { 

    content.innerHTML = ""
    body.style.backgroundImage = ""

    let menuTitle = document.createElement("h1")

    menuTitle.innerHTML = "<u>Menu</u>"
    menuTitle.style.textAlign = "center"
    menuTitle.style.marginTop = "4.5%"
    menuTitle.style.color = "gold"


    content.appendChild(menuTitle)

    let menuGrid = document.createElement("div")
    content.appendChild(menuGrid)

    for ( let i=0; i < 6; i++) {

        let menuCell = document.createElement("div")
        menuCell.id = `CellNumber${i}`

        menuCell.style.backgroundColor = "white"

        menuCell.style.width = "100%"
        menuCell.style.height = "50%"

        menuGrid.appendChild(menuCell)
    }

    for ( let i=0; i < 6; i++) {   

        let currentImage = document.createElement("img")

        currentImage.style.height = "70%"
        currentImage.style.width = "100%"
        currentImage.style.borderRadius = "15%"
        currentImage.src = images[i]
        
        let currentCell = document.getElementById(`CellNumber${i}`)
        currentCell.style.padding = "1%"
        currentCell.style.borderRadius = "15%"
        currentCell.appendChild(currentImage)

        let currentLabelDiv = document.createElement("div")
        currentLabelDiv.innerHTML = imageLabels[i]
        currentLabelDiv.width = "fitContent"
        currentLabelDiv.height = "fitContent"

        currentCell.appendChild(currentLabelDiv)
    }

    menuGrid.style.display = "flex"
    menuGrid.style.gap = "1rem"

    menuGrid.style.backgroundColor = "beige"
    menuGrid.style.border = "7px solid gold"

    menuGrid.style.height = "80vh"
    menuGrid.style.width = "90vw"

    menuGrid.style.marginLeft = "auto"
    menuGrid.style.marginRight = "auto"
    menuGrid.style.marginTop = "2.5%"
    menuGrid.style.borderRadius = "7%"
}

export {renderMenu}
