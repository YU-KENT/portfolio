// Get all the <li> elements inside the <ul>
var listItems = document.querySelectorAll("ul li");

// Loop through the list items and add a click event listener
listItems.forEach(function (li) {
  li.addEventListener("click", function () {
    // Find the <a> element inside the clicked <li>
    var link = li.querySelector("a");

    if (link) {
      // Activate the link by navigating to its href
      window.location.href = link.getAttribute("href");
    }
  });
});


function adjustAnnimationSize() {
  const containerWidth = document.querySelector('.animation-container').offsetWidth;
  const container = document.querySelector('.animation-container')
  const elementBird = document.querySelector('.bird');
  const elementMosquito= document.querySelector('.mosquito');
  const elementCloudRight = document.querySelector('.clouds.right')
  const elementCloudLeft = document.querySelector('.clouds.left')
  const elementCloudStyle2 = document.querySelector('.clouds.style2')
  
  // Adjust the size based on the container width
  const newProportion = containerWidth / 1440; // You can adjust this value as needed
  const regProportion = 300/1440;
  container.style.height = regProportion*containerWidth + 'px';
  console.log(container,"gg",containerWidth,)
  elementBird.style.width = 100*newProportion + 'px';
  elementMosquito.style.width = 25*newProportion + 'px';
  elementCloudRight.style.width = 80*newProportion + 'px';
  elementCloudLeft.style.width = 65*newProportion + 'px';
  elementCloudStyle2.style.width = 65*newProportion + 'px';
}

// Add an event listener to adjust the size when the window is resized
window.addEventListener('resize', adjustAnnimationSize);

// Call the function initially
adjustAnnimationSize();

const navbarHidden = document.querySelector('.navbar.hidden');
let prevScrollPos = window.scrollY;

window.onscroll = function() {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    navbarHidden.style.top = '0';
  } else {
    navbarHidden.style.top = '-128x'; // Adjust the height of your navbar
  }

  prevScrollPos = currentScrollPos;
};

// Display the navbar when scrolling down
window.addEventListener('scroll', function() {
  if (window.scrollY > 100) { // Adjust the scroll position at which the navbar appears
    navbarHidden.style.display = 'flex';
  } else {
    navbarHidden.style.display = 'none';
  }
});

// fenetre

function showPhrase(){
  const buttons = document.querySelectorAll(".buttons_bar button")
  buttons.forEach((button)=>{
    button.addEventListener("mouseover",function(){
    const btnColor = button.className.split("_")[1];
    console.log("color",btnColor)
    const Phrases = document.querySelectorAll(".fenetre_contents p")
      for( i=0; i< Phrases.length; i++){
        if(Phrases[i].className == `p_${btnColor}` ){
          Phrases[i].style.left = '50%'
        }
        else {
          Phrases[i].style.left = '-100%'
        }
      }

    })

    
  })
}
showPhrase();


// image slide
const projects = document.querySelectorAll('.slider')
console.log("rojects.length",projects.length)
for(let i = 0; i < projects.length; i++ ){

let slideNumber = i + 1
console.log("slideNumber",slideNumber,i)
const Number = 'slide'+ slideNumber;
const slides = document.querySelectorAll(`#${Number} .slide`)
let currentSlide = 0;
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });
    }

showSlide(currentSlide);
const buttonDiv =  document.querySelector(`#${Number} .buttons`)
console.log("buttonDiv",buttonDiv)
for( n=0 ; n < slides.length; n++){
const SlideButton = document.createElement('BUTTON')
buttonDiv.appendChild(SlideButton)


}

}






function showButtons(){


}
