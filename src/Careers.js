
const renderCareer = function() { 

  content.innerHTML = ""
  content.style.backgroundImage = ""

  let parentDiv = document.createElement("div")

  parentDiv.style.display = "flex"
  parentDiv.style.justifyContent = "center"
  parentDiv.style.alignItems = "center"
  parentDiv.style.height = "100vh"
  parentDiv.style.width = "100vw"

  let leftColumnDiv = document.createElement("div")

  leftColumnDiv.style.marginTop = "10vh"
  leftColumnDiv.style.width = "32vw"
  leftColumnDiv.style.height = "100vh"
  leftColumnDiv.style.padding = "3rem"

  leftColumnDiv.style.backgroundColor = "white"

  let leftColumnTitle = document.createElement("h1")

  leftColumnTitle.textContent = "Filter"
  leftColumnTitle.style.fontSize = "4rem"
  leftColumnTitle.style.color = "black"

  leftColumnDiv.appendChild(leftColumnTitle)

  let vacancyParentDiv = document.createElement("div")
  let vacancyColumnTitle = document.createElement("h1")

  vacancyColumnTitle.textContent = "Our Vacancies"
  vacancyColumnTitle.style.fontSize = "5rem"
  vacancyColumnTitle.style.color = "lavender"
  
  vacancyParentDiv.style.marginTop = "12rem"
  vacancyParentDiv.style.display = "grid"
  vacancyParentDiv.style.gridTemplateColumns = "0.6fr 0.6fr"
  vacancyParentDiv.style.gridAutoRows = "auto"
  vacancyParentDiv.style.gap = "1rem"

  vacancyParentDiv.style.overflow = "scroll"
  vacancyParentDiv.style.width = "70%"
  vacancyParentDiv.style.height = "100%"
  vacancyParentDiv.style.padding = "2%"

  vacancyParentDiv.style.backgroundColor = "blue"
  vacancyParentDiv.style.color = "lavender"

  vacancyParentDiv.appendChild(vacancyColumnTitle)

  for ( let i = 0; i < 50; i++ ){

    let vacancyCell = document.createElement("div")

    vacancyCell.style.backgroundColor = "lavender"
    vacancyCell.style.color = "black"

    vacancyCell.innerHTML = "<h1> Kitchen Porter </h1> <br> <p> <b> Glasgow, City Center </b> </p> <br> <p> <b>Restaurant (Stores), Hourly Paid </b> <p> <br> <p> <b> Permanent </b> </p> <br> <p> <b> Salary: </b> <p> 2 Shillings Per Hour (open for negotiation) </p>"

    vacancyCell.style.height = "36vh"
    vacancyCell.style.width = "20vw"
    vacancyCell.style.padding = "1rem"
    vacancyCell.style.borderRadius = "10%"

    vacancyParentDiv.appendChild(vacancyCell)
  }

  let barParentDiv = document.createElement("div")

  barParentDiv.style.display = "flex"
  barParentDiv.style.flexDirection = "column"
  barParentDiv.style.gap = "1rem"

  let filterBar = document.createElement("input")
  let locationBar = document.createElement("input")

  filterBar.style.border = locationBar.style.border = "0.2rem solid blue"
  filterBar.style.width = locationBar.style.width = "12.5vw"
  filterBar.style.height = locationBar.style.height = "5vh"
  filterBar.style.borderRadius = locationBar.style.borderRadius = "5rem"



  filterBar.placeholder = "Filter results..."
  locationBar.placeholder = "Filter location..."

  filterBar.type = "text"
  locationBar.type = "text"

  barParentDiv.appendChild(filterBar)
  barParentDiv.appendChild(locationBar)
  
  leftColumnDiv.appendChild(barParentDiv)

  parentDiv.appendChild(leftColumnDiv)
  parentDiv.appendChild(vacancyParentDiv)

  content.appendChild(parentDiv)

}

export {renderCareer}

