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

const navlistLi = document.querySelectorAll(".nav-list li")
navlistLi.forEach((li)=>{
   li.addEventListener("click",()=>{
    if (!navlist.classList.contains('hidden')) {
        navlist.classList.add('hidden');
  } else {
      navlist.classList.remove('hidden');
  }
       
   })

})


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




// box slide for projets
const boxs = document.querySelectorAll(".box")
const sliderContainer =  document.querySelector(".slider-container")
const sliderBox = document.querySelector('.slider-box');
const totalBoxs = boxs.length;
const dotClass = 'dot';
let currentBox = 0;
let numberBoxs;
let boxWidth;

function updateNumberBoxs(){
  if(window.innerWidth > 1024){
    numberBoxs = Math.ceil(totalBoxs / 3);
    boxWidth = 1266
  }else if (window.innerWidth <= 1024 && window.innerWidth > 768 ) {
    // Change the number of boxes when the screen width is 1024 pixels or less
    numberBoxs = Math.ceil(totalBoxs / 2);
    boxWidth = 1005
  }else if(window.innerWidth <= 768 && window.innerWidth > 425){ 
    numberBoxs = Math.ceil(totalBoxs / 1);
    console.log("here768",numberBoxs)
    boxWidth = 751
  }else if(window.innerWidth <= 425 && window.innerWidth >376 ){
    numberBoxs = Math.ceil(totalBoxs / 1);
    boxWidth = 408
  }else if(window.innerWidth <= 376){
    numberBoxs = Math.ceil(totalBoxs / 1);
    boxWidth = 357
  }
}

updateNumberBoxs();

function updateSlider() {
  sliderBox.style.transform = `translateX(${-(currentBox * boxWidth) }px)`;
  console.log("update",boxWidth,numberBoxs)
  // Update active dot
  const dots = document.querySelectorAll(`.${dotClass}`);
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentBox);
  });
}

// creat dot
const dotsContainer = document.getElementById('nav-dots');
function creatDot(){
  for (let i = 0; i < numberBoxs; i++) {
    const dot = document.createElement('div');
    dot.className = dotClass;
    dot.addEventListener('mouseover', () => {
      currentBox = i;
      updateSlider();
    });
    dotsContainer.appendChild(dot);
  }
}
creatDot();

window.addEventListener('resize', () => {
  updateNumberBoxs();
  // update the dots in the DOM when the window is resized
  // remove all existing dots and recreate them
  dotsContainer.innerHTML = '';
  creatDot();
  
});
// Initialize slider
updateSlider();

//show lightbox
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

              }else{
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
const closeButton =  document.querySelector(".close-button")

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
// close button function
closeButton.addEventListener("click",()=>{
 
  if(sliderContainer.style.display = "block"){
    sliderContainer.style.display = "none"
    for(i = 0; i < slides.length; i++){
       if(i == 0){
        slides[i].classList.add("active")
        buttons[i].classList.add("active")
       }else{
        slides[i].classList.remove("active")
        buttons[i].classList.remove("active")
       }
     }
    
}else{
     sliderContainer.style.display = "block"

}
 })


}
  





  




