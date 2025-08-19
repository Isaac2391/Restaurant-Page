import backgroundPic from '/src/images/homepageBackgroundPicture.jpg'

const renderAbout = function() { 

  content.innerHTML = ""
  content.style.backgroundImage = ""

 content.style.backgroundImage = `url(${backgroundPic})`
 content.style.backgroundRepeat = "no-repeat"
 content.style.backgroundSize = "cover"

 let aboutTitle = document.createElement("h1")

 aboutTitle.textContent = "About Our Company"

 aboutTitle.style.color = "lavender"

 aboutTitle.style.fontSize = "6rem"
 aboutTitle.style.textAlign = "center"
 aboutTitle.style.zIndex = "2"

 let aboutDescription = document.createElement("div")

 aboutDescription.style.color = "lavender"
 aboutDescription.style.backgroundColor = "maroon"
 aboutDescription.style.background = "linear-gradient(to bottom, maroon, brown)"
 
 aboutDescription.style.textAlign = "center"

 aboutDescription.style.height = "70vh"
 aboutDescription.style.height = "fit-content"
 aboutDescription.style.width = "fit-content"
 aboutDescription.style.fontSize = "2rem"

 aboutDescription.innerHTML = "<p>At The Generic Restaurant, we believe that the best generics are built on strong, reliable foundations. That’s why our products are sourced from the most generic suppliers across the globe—wherever there is an opportunity to provide quality without unnecessary distinction. From generic grains in the Midwest, to generic spices in South Asia, to generically fresh produce from local partners,  we make sure every ingredient embodies the true spirit of the ordinary. Our company operates generic offices in multiple locations around the world, including New York, London, Singapore, and an undisclosed but definitely generic business park somewhere in suburban America. Each office serves as a hub for ensuring that our generically excellent standards are upheld across every market we serve. When it comes to investment, Generic Co. prides itself on a forward-thinking yet safely unremarkable strategy. We allocate resources into sustainable and ethical ventures, always striving to diversify into areas that maximize value while minimizing risk. Our approach is not about flashy risks or bold experiments—it’s about steady, dependable growth, just like our restaurant: reliably generic, predictably excellent.At the heart of it all, we are guided by one mission: to provide our customers with a dining experience  so universally familiar and comfortably ordinary that it feels like home—wherever in the world you may be<p>"

 content.appendChild(aboutTitle)
 content.appendChild(aboutDescription)



  

}

export {renderAbout}

