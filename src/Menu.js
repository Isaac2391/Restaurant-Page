
const renderMenu = function () { 

    content.innerHTML = ""

    let menuGrid = document.createElement("div")
    content.appendChild(menuGrid)

    for ( let i=0; i < 6; i++) {

        let menuCell = document.createElement("div")
        menuCell.id = `CellNumber${i}`

        menuCell.style.backgroundColor = "white"

        menuCell.style.width = "100%"
        menuCell.style.height = "100%"

        menuGrid.appendChild(menuCell)
    }

    const images = ['/src/images/genericBurger.jpg','/src/images/genericGarlicBread.jpg','/src/images/genericJollof.jpg','/src/images/genericMozzStick.jpg',
    '/src/images/genericPizza.webp', '/src/images/genericSoup.jpg']
    
    for ( let i=0; i < 6; i++) {    
        let currentImage = document.createElement("img")
        currentImage.src = images[i]
        
        let currentCell = document.getElementById(`CellNumber${i}`)
        currentCell.appendChild(currentImage)
    }

    menuGrid.style.display = "grid"
    menuGrid.style.gap = "1rem"
    menuGrid.style.gridTemplateColumns = "repeat(3,auto)"
    menuGrid.style.gridTemplateRows = "repeat(2,auto)"

    menuGrid.style.backgroundColor = "beige"

    menuGrid.style.height = "80vh"
    menuGrid.style.width = "80vw"
    menuGrid.style.marginLeft = "auto"
    menuGrid.style.marginRight = "auto"
    menuGrid.style.marginTop = "5%"
}

export {renderMenu}
