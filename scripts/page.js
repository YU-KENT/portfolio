const sectionPresent = document.querySelector(".present")
const newdivPresent = document.createElement("div")
const presentHTML = `
                   <image class="cannard" src="asserts/bg.jpg"></image>
                    <div class="present_p">
                        <h1>Yu Tian Kent</h1>
                        <h2>Développeuse Web / Front-End React</h2>
                   </div>
                   <a href="#profil" class="present_button">QUI-SUIS JE ?</a>

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
                <h2 class="profil_title"> About Me</h2>
                <p class="profil_p">
                    Après 9 années d'expérience dans le
                    commerce.<br>j'ai entrepris une transition
                    pour devenir développeuse front-end.<br>je
                    souhaite apporter mes compétences à
                    votre entreprise tout en poursuivant ma
                    formation.<br>Grâce à mes études en
                    mathématiques et à mes expériences
                    professionnelles, Je suis devenu
                    quelqu'un d'organisée, creative,
                    rigoureuse et j'ai la pensée logique
                    décomposant les problèmes en étapes
                    claires et en reliant les concepts de
                    manière cohérente.
                </p>
            </div>
        </div>
        
                            `

newdivprofil.innerHTML = profilHTML;
newdivprofil.classList.add("section_profil");
sectionprofil.appendChild(newdivprofil)

const sectionCompetences = document.getElementById('competences')
const newdivCompetences = document.createElement("div")
const competencesHTML= `
                    <div class="competences_title">
                        <h2>MES COMPÉTENCES</h2>
                        <h3>Des compétences à votre service</h3>
                    </div>
                    <div class="competences_contents">
                       <div class="contents_left">
                         <h3>Domaines de compétences</h3>
                            <div class="content">
                              <i class="fa-solid fa-circle-check" style="color: #0c2e6a;"></i>
                              <h4>GESTION DE PROJETS WEB</h4>
                            </div>
                            <p>Site vitrine, intranet,corporate, évènementiel, e-commerce </p>
                           
                           <div class="content">
                            <i class="fa-solid fa-circle-check" style="color: #0c2e6a;"></i>
                             <h4>INTÉGRATION HTML / CSS</h4>
                           </div>
                           <p>Respectueux des standards du Web / Accessibilité </p>
                          
                           <div class="content" >
                            <i class="fa-solid fa-circle-check" style="color: #0c2e6a;"></i>
                            <h4>APPLICATIONS SPÉCIFIQUES ET INTERFACE D'ULTILISATEUR</h4>
                           </div>
                            <p>JAVASCRIPT - REACT - REDUX - API</p>
                       
                          <div class="content">
                            <i class="fa-solid fa-circle-check" style="color: #0c2e6a;"></i>
                            <h4>TEST UNITAIRE / INTÉGRATION D'APPLICATIONS</h4>
                         </div>
                            <p>JEST</p>
                       </div class="content">
                       <div class="contents_right">
                          <h3>Compétences en développement</h3>
                          <h4>FRONT-END</h4>
                          <div class="bar">
                            <span>HTML - CSS</span>
                            <div class="data-bar">
                                <div class="data-value" style="width: 90%;"></div>
                            </div>
                         </div>
                         <div class="bar">
                            <span>JAVASCRIPT</span>
                            <div class="data-bar">
                                <div class="data-value" style="width: 90%;"></div>
                            </div>
                         </div>
                         <div class="bar">
                            <span>REACT</span>
                            <div class="data-bar">
                                <div class="data-value" style="width: 80%;"></div>
                            </div>
                         </div>
                         <div class="bar">
                            <span>ANGULAR</span>
                            <div class="data-bar">
                                <div class="data-value" style="width: 25%;"></div>
                            </div>
                         </div>
                         <div class="bar">
                            <span>TEST-JEST</span>
                            <div class="data-bar">
                                <div class="data-value" style="width: 60%;"></div>
                            </div>
                         </div>
                         <h4>BACK-END</h4>
                         <div class="bar">
                            <span>MONGODB / EXPRESS</span>
                            <div class="data-bar">
                                <div class="data-value" style="width: 60%;"></div>
                            </div>
                         </div>
                       </div>
                    </div>
`
newdivCompetences.innerHTML = competencesHTML ;
sectionCompetences.appendChild(newdivCompetences);