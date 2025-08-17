import backgroundPic from '/src/images/homepageBackgroundPicture.jpg'

let body = document.querySelector("body")

const renderAbout = function() { 

  content.innerHTML = ""
  body.style.backgroundImage = ""

  body.style.backgroundImage = `url(${backgroundPic})`
  body.style.backgroundRepeat = "no-repeat"

}

export {renderAbout}

