const sectionCompetences = document.getElementById('competences')
const newdivCompetences = document.createElement("div")
const competencesHTML= `
                    <div class="competences_title">
                        <h2>MES COMPÉTENCES</h2>
                        <h3>Des compétences à votre service</h3>
                        <a href="asserts/CV YU-KENT.FE.pdf" class="cv" download>
                        <i class="fa-solid fa-file-arrow-down fa-xl download-icon"></i> Mon CV
                        </a>
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
                                <div class="data-value" style="width: 95%;"></div>
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