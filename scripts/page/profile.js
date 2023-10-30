const sectionPresent = document.querySelector(".present")
const newdivPresent = document.createElement("div")
const presentHTML = `
                   <image class="cannard" src="asserts/bg.jpg"></image>
                    <div class="present_p">
                        <h1>Yu Tian Kent</h1>
                        <h2>Développeuse Web / Front-End React</h2>
                   </div>
                   <a href="#profil" class="present_button">CONTACTEZ MOI</a>

`
newdivPresent.innerHTML = presentHTML;
newdivPresent.classList.add("present_image");
sectionPresent.appendChild(newdivPresent)

const sectionprofil = document.getElementById('profil')
const newdivprofil = document.createElement("div")
const profilHTML= `
        <div class="animation-container">
            <img class="bird" src="./asserts/bird.svg" alt="Flying Bird">
            <img class="mosquito" src="./asserts/mosquito.svg" alt="Flying mosquito">
            <img class="clouds left" src="./asserts/cloud.svg" alt="cloud photo">
            <img class="clouds left style2" src="./asserts/cloud2.svg" alt="cloud photo">
            <img class="clouds right" src="./asserts/cloud.svg" alt="cloud photo">
        </div>
        <div class="profil">
            <div class="profil_image">
                <image class="profil_img" src="asserts/profile.jpg"></image>
            </div>
            <div class="profil_content">
                <h2 class="profil_title"> Qui Suis-je ?</h2>
                <p class="profil_p">
                Après 9 années d'expérience dans le
                commerce en France et à l'international, 
                j'ai entrepris une reconversion afin de devenir 
                developpeur front-end.<br>
                Je souhaite apporter mes compétences à
                votre entreprise dans un domaine qui me passionne.
                <br>Grâce à mes études en
                mathématiques et à mes expériences
                professionnelles, je suis devenue
                quelqu'un d'organisée, creative,
                rigoureuse et j'ai la pensée logique
                décomposant les problèmes en étapes
                claires et en reliant les concepts de
                manière cohérente.
                </p>
                <img class="papillion pa_1"src="asserts/papillion.svg" alt="icons papillion">
            </div>
        </div>
        
                            `

newdivprofil.innerHTML = profilHTML;
newdivprofil.classList.add("section_profil");
sectionprofil.appendChild(newdivprofil)