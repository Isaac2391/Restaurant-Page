let body = document.querySelector("body")

const renderHome = function() { 

content.innerHTML = ""
body.style.backgroundImage = ""


let banner = document.createElement("div")
content.appendChild(banner)

let descriptionContent = document.createElement("div")
content.appendChild(descriptionContent)

let hoursContent = document.createElement("div")
content.appendChild(hoursContent)

let locationContent = document.createElement("div")
content.appendChild(locationContent)

banner.style.backgroundColor = "brown"
banner.style.color = "black"
banner.style.outline = "solid 10px black"

banner.style.height = "8vh"
banner.style.width = "60vw"
banner.style.fontSize = "2rem"
banner.style.padding = "2%"
banner.style.borderRadius = "35%"
banner.style.textAlign = "center"
banner.style.fontWeight = "bold"

banner.style.margin = "auto"
banner.style.marginTop = "6%"

banner.innerHTML = "Welcome to The Generic Restaurant!"


descriptionContent.style.backgroundColor = "brown"
descriptionContent.style.color = "black"
descriptionContent.style.outline = "solid 5px black"

descriptionContent.style.height = "40vh"
descriptionContent.style.width = "20vw"
descriptionContent.style.fontSize = "1.2rem"
descriptionContent.style.padding = "3%"
descriptionContent.style.borderRadius = "10%"
descriptionContent.style.textAlign = "center"

descriptionContent.style.margin = "auto"
descriptionContent.style.marginTop = "6%"

descriptionContent.innerHTML = `
  <p>From our generic founding, the generic restaurant has always tried to be as generic as humanly possible. 
  we inherited this ethos from our founder, John Generic, and his forward thinking attitude of success, 
  virtue and hard work in all things generic has served us well. </p>
  <h2>- Generic Co.</h2>
`


hoursContent.style.backgroundColor = "brown"
hoursContent.style.color = "black"
hoursContent.style.outline = "solid 10px white"

hoursContent.style.height = "70vh"
hoursContent.style.width = "26vw"
hoursContent.style.padding = "2rem"
hoursContent.style.paddingTop = "0.2rem"
hoursContent.style.fontSize = "1.5rem"
hoursContent.style.borderRadius = "35%"
hoursContent.style.textAlign = "center"

hoursContent.style.margin = "auto"
hoursContent.style.marginTop = "6%"

hoursContent.innerHTML = `<u><strong><h3> Hours</h3></u>
<ul> Monday: 9am - 11pm </ul>
<ul> Tuesday: 9am - 11pm </ul>
<ul> Wednesday: 9am - 11pm </ul>
<ul> Thursday: 9am - 11pm </ul>
<ul> Friday: 9am - 11pm </ul>
<ul> Saturday: 10am - 4pm </ul>
<ul> Sunday: 10am - 4pm </ul> </strong>
`


locationContent.style.backgroundColor = "brown"
locationContent.style.color = "black"
locationContent.style.outline = "solid 5px black"

locationContent.style.height = "auto"
locationContent.style.width = "40vw"
locationContent.style.padding = "1.5rem"
locationContent.style.fontSize = "1.2rem"
locationContent.style.borderRadius = "35%"

locationContent.style.margin = "auto"
locationContent.style.marginTop = "3%"
locationContent.style.marginBottom = "20%"

locationContent.innerHTML = ` <h2> Location </h2> 
<p> 108-110 Sauchiehall Street, Glasgow, G2 3DE. </p> 
`

}

export {renderHome}