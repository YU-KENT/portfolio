// function for nav-list version mobile
const menuButton = document.getElementById('menu-button');
const navlist = document.querySelector(".nav-list")
menuButton.addEventListener("click",()=>{
    if (navlist.classList.contains('hidden')) {
        navlist.classList.remove('hidden');
    
    } else {
        navlist.classList.add('hidden');
        
    }
})

const navCloseButton = document.querySelector(".nav-close-button")
navCloseButton.addEventListener("click",()=>{
  if (!navlist.classList.contains('hidden')) {
      
      navlist.classList.add('hidden');
  
  } else {
      navlist.classList.remove('hidden');
      
  }
})

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
  const elementPapillion = document.querySelector('.papillion.pa_1')
  
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
  elementPapillion.style.width = 80*newProportion + 'px';
}

// Add an event listener to adjust the size when the window is resized
window.addEventListener('resize', adjustAnnimationSize);

// Call the function initially
adjustAnnimationSize();

const navbarHidden = document.querySelector('.navbar.Dhidden');
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
  const screenWidth = window.screen.width;
  if (window.scrollY > 100 && screenWidth > 768) { // Adjust the scroll position at which the navbar appears
    navbarHidden.style.display = 'flex';
  } else {
    navbarHidden.style.display = 'none';
  }
});

// fenetre

function showPhrase(){
  const buttons = document.querySelectorAll(".buttons_bar button")
  const content1 = document.querySelector(".fenetre_contents.content_1")
  const content2 = document.querySelector(".fenetre_contents.content_2")
  const Phrases = document.querySelectorAll(".fenetre_contents.content_2 p")
  buttons.forEach((button)=>{
    button.addEventListener("mouseover",function(){
      if(content2.classList.contains("hidden")){
        console.log("true")
        content2.classList.remove("hidden")
        content1.classList.add("hidden")
      }
      else{
        content2.classList.add("hidden")
      }
    
    const btnColor = button.className.split("_")[1];
    for( i=0; i< Phrases.length; i++){
        if(Phrases[i].className == `p_${btnColor}` ){
          Phrases[i].style.left = '50%'
        }
        else {
          Phrases[i].style.left = '-100%'
        }
      }
    })

    button.addEventListener("mouseleave",function(){
      for( i=0; i< Phrases.length; i++){
        content1.classList.remove("hidden")
        content2.classList.add("hidden")
      }
    })
  })
}
showPhrase();
/* //sliderBox button
const sliderBoxButtons =  document.querySelectorAll(".sliderBox-button")
  sliderBoxButtons.forEach((button,index)=>{
    button.addEventListener("click",()=>{
       
       const sliderBoxs = document.querySelectorAll(".slider-box")
       console.log("buttonIndex",index)

       for ( i = 0; i < sliderBoxButtons.length; i ++ ){
         if(i == index){
          sliderBoxButtons[i].classList.add("active")
          sliderBoxs[i].classList.add("active")
         }
         else{
          sliderBoxButtons[i].classList.remove("active")
          sliderBoxs[i].classList.remove("active")
         }

        }

    })
    

  }) */


//light box button close
const sliderContainer =  document.querySelector(".slider-container")
const closeButton =  document.querySelector(".close-button")

closeButton.addEventListener("click",()=>{
    console.log("currentSliderId",currentSliderId)
    const currentSlides = document.querySelectorAll(`#slider${currentSliderId} .slide`)
    console.log(currentSlides)
    if(sliderContainer.style.display = "block"){
      sliderContainer.style.display = "none"
      for(i = 0; i < currentSlides.length; i++){
         if(i == 0){
          currentSlides[i].classList.add("active")
         }else{
          currentSlides[i].classList.remove("active")
         }
       }
      
  }else{
       sliderContainer.style.display = "block"

  }
   })

//show lightbox
const boxs = document.querySelectorAll(".box")
let currentSliderId = 0
boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        const boxNumber = box.id.split("_")[1]
        const sliders = document.querySelectorAll(".slider")
        if(sliderContainer.style.display = "none"){
            sliderContainer.style.display = "block"
            for(i=0; i<sliders.length; i++){
              if(i === boxNumber -1){
                sliders[i].style.display = "flex"
                currentSliderId = i + 1 ;
                console.log("block", "currentSliderId",currentSliderId)
              }else{
                console.log("none")
                sliders[i].style.display = "none"}
            }

        }else{
          sliderContainer.style.display = "none"

        }
        showSlide();

  })
})
// image slide
function showSlide(){
const buttons = document.querySelectorAll(`#slider${currentSliderId} .slider-button`)
const slides = document.querySelectorAll(`#slider${currentSliderId} .slide`)

buttons.forEach((button,index)=>{
      button.addEventListener("mouseover",()=>{
      for(i = 0; i < buttons.length; i++){
        if(i == index){
          buttons[i].classList.add("active")
          slides[i].classList.add("active")

        }
        else{
          buttons[i].classList.remove("active")
          slides[i].classList.remove("active")
        }
      }
      })
})



}
  

  




