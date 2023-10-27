const header = document.querySelector("header")
const newdivNavbar= document.createElement("div")
newdivNavbar.classList.add("navbar");
const navbarHTML = `
            <div class="logo">
               <img class="logo_circle" src="asserts/logo.jpg" alt="logo">
               <p class="logo_prenom">Yu</p>
            </div>
            <div class="menu-button" >
               <img src="asserts/menu.svg" id="menu-button" alt="button menu">
               <ul class="nav-list hidden">
                        <li><a href ="#present">ACCUEIL</a></li>
                        <li> <a href="#profil">PROFIL</a></li>
                        <li><a href="#competences">COMPÉTENCES</a></li>
                        <li> <a href="#portfolio">PORTFOLIO</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                        <span class="nav-close-button"></span>
                </ul>
            </div>
            <div class="navbar_r">
                <a href ="#header">
                    <img class="icon_house" src="asserts/house.svg" alt="icon Accueil">
                </a>
                <ul>
                    <li><a href ="#header">ACCUEIL</a></li>
                    <li> <a href="#profil">PROFIL</a></li>
                    <li><a href="#competences">COMPÉTENCES</a></li>
                    <li> <a href="#portfolio">PORTFOLIO</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </div>
            `
newdivNavbar.innerHTML = navbarHTML;
header.appendChild(newdivNavbar)


const newdivNavbarScroll= document.createElement("div")
newdivNavbarScroll.classList.add("navbar");
newdivNavbarScroll.classList.add("Dhidden");
const navbarScrollHTML = `
             <div class="logo">
                    <img class="logo_circle" src="asserts/logo.jpg" alt="logo">
                    <p class="logo_prenom">Yu</p>
                </div>
                <div class="navbar_r">
                    <a href ="#header">
                       <img  class="icon_house" src="asserts/whitehouse.svg" alt="icon Accueil">
                    </a>
                    <ul>
                        <li><a href ="#header">ACCUEIL</a></li>
                        <li> <a href="#profil">PROFIL</a></li>
                        <li><a href="#competences">COMPÉTENCES</a></li>
                        <li> <a href="#portfolio">PORTFOLIO</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>
              </div>
`
newdivNavbarScroll.innerHTML = navbarScrollHTML;
header.appendChild(newdivNavbarScroll)


