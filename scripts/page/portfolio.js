const sectionPortfolio = document.getElementById('portfolio')
const newdivPortfolio = document.createElement("div")
const portfolioHTML= `
           <div class="portfolio_title">
                <h2>PORTFOLIO</h2>                
                <p>Ma formation chez</h3>
                <p>Des projets realisé pendant mon parcours</p>
                <a href ="https://openclassrooms.com/fr/">
                    <img src="asserts/openclassroom.jfif" alt="lien openclassroom">
                </a>
            </div>
          <div class= "projets">
                
                <div class="slider-box " >
                        <div class="box" id="box_1">
                            <img src="asserts/jone1.png" alt="jone app image">
                            <span class="box_bg">Une Plateforme numérique de gestion<br>dédiée aux équipes de développement</span>
                        </div>
                        <div class="box" id="box_2">
                            <img src="asserts/npmLibrary.png" alt="npm library image">
                            <span class="box_bg">J'ai créé un react component library</span>
                        </div>
                        <div class="box" id="box_3">
                            <img src="asserts/application RH1.png" alt="application image">
                            <span class="box_bg">Application pour un compte employées <br>Gerer date-picker table localstorage <br> ( React / Redux )</span>
                        </div>
                    
                        <div class="box" id="box_4">
                            <img src="asserts/argentBank1.png" alt="projectGraphique 1mage 1">
                            <span class="box_bg">Application pour un compte utilisateur bancaire<br>Calls API<br> ( React / Redux / Swagger )</span>
                       </div>
                        <div class="box" id="box_5">
                            <img src="asserts/projectGraphique.jpg" alt="projectGraphique 1mage 1">
                            <span class="box_bg">Un tableau de bord d'analytics sportif <br> calls : un mock des données de l'API / Real service API<br> ( React / Recharts )</span>
                       </div>
                       <div class="box" id="box_6">
                            <img src="asserts/projectRH1.png" alt="projectRH 1mage 1">
                            <span class="box_bg">SaaS RH <br>Débugger et tester<br>( React / JEST )</span>
                       </div>
                       <div class="box" id="box_7">
                            <img src="asserts/logement1.png" alt="projectLogement 1mage 1">
                            <span class="box_bg">Site des logements <br>( React / React-Router )</span>
                       </div>
                        <div class="box" id="box_8">
                            <img src="asserts/projectRerchercheRecette1.jpg" alt="projectRerchercheRecette 1mage 1">
                            <span class="box_bg">Site de cuisine<br>( HTML / CSS / Java Script )<br>Creation de la fonctionnalité de recherche et des filtres </span>
                        </div>
                    
                        <div class="box" id="box_9">
                          <img src="asserts/projectPhotographer1.jpg" alt="projectPhotographer 1mage 1">
                          <span class="box_bg">Site de Photographer responsive et accesible<br>( HTML / CSS / Java Script )</span>
                        </div>
                        <div class="box" id="box_10">
                          <img src="asserts/ohmyfood1.png" alt="projectOhmyfood 1mage 1">
                          <span class="box_bg">Site de restaurant responsive<br> Animation CSS<br>( HTML / CSS / )</span>
                        </div>
            </div>
            <div id="nav-dots"></div>

            <div class="slider-container">
                         <span class="close-button"></span>

                        <div class="slider" id="slider1">
                         <div class="slide active">
                           <img src="asserts/jone1.png" alt="jone app image">
                         </div>
                         <div class="slide">
                           <img src="asserts/jone 2.png" alt="jone app image">
                         </div>
                         <div class="slider-navigation">
                                <div class="slider-button active"></div>
                                <div class="slider-button"></div>
                         </div>
                         <div class="slider-info">
                            <span>Vous pouvez trouver cette application sur</span>
                            <a href="https://app-jone.vercel.app/">https://app-jone.vercel.app/</a>
                         </div>
                        </div>

                        <div class="slider" id="slider2">
                            <div class="slide active">
                                <img src="asserts/npmLibrary.png" alt="npm library image">
                            </div>
                            <div class="slider-info">
                                <span>Vous pouvez consulter le lien :</span>
                                <a href="https://www.npmjs.com/package/yu-component-library?activeTab=readme">https://www.npmjs.com/package/yu-component-library?activeTab=readme</a>
                            </div>
                        </div>

                        <div class="slider" id="slider3">
                            <div class="slide active">
                                <img src="asserts/application RH1.png" alt="application image 1">
                            </div>
                            <div class="slide">
                                <img src="asserts/application RH2.png" alt="application image 2">
                            </div>
                            <div class="slider-navigation">
                                <div class="slider-button active"></div>
                                <div class="slider-button"></div>
                            </div>
                        </div>

                         <div class="slider" id="slider4">
                            <div class="slide active">
                                <img src="asserts/argentBank1.png" alt="project agent bancaire 1mage 1">
                            </div>
                            <div class="slide">
                                <img src="asserts/argentBank3.png" alt="project agent bancaire 1mage 2">
                            </div>
                            <div class="slide">
                                <img src="asserts/argentBank2.png" alt="project agent bancaire 1mage 2">
                            </div>
                            <div class="slider-navigation">
                                <div class="slider-button active"></div>
                                <div class="slider-button"></div>
                                <div class="slider-button"></div>
                                <div class="slider-button"></div>
                            </div>
                        </div>

                         <div class="slider" id="slider5">
                                <div class="slide active">
                                    <img src="asserts/projectGraphique.jpg" alt="projectGraphique 1mage 1">
                                </div>
                                <div class="slide">
                                    <img src="asserts//projectGraphique1.jpg" alt="projectGraphique 1mage 2">
                                </div>
                                <div class="slider-navigation">
                                    <div class="slider-button active"></div>
                                    <div class="slider-button"></div>
                                </div>
                        </div>

                        <div class="slider" id="slider6">
                                <div class="slide active">
                                  <img src="asserts/projectRH1.png" alt="projectRH image 1">
                                </div>
                                <div class="slide">
                                  <img src="asserts/projectRH2.png" alt="projectRH image 2">
                                </div>
                            
                            <div class="slider-navigation">
                                <div class="slider-button active"></div>
                                <div class="slider-button"></div>
                            </div>
                        </div>

                        <div class="slider" id="slider7">
                            <div class="slide active">
                               <img src="asserts/logement1.png" alt="projectLogement 1mage 1">
                            </div>
                            <div class="slide">
                               <img src="asserts/logement2.png" alt="projectLogement Image 2">
                            </div>
                            <div class="slide">
                               <img src="asserts/logement3.jpg" alt="projectLogement Image 3">
                            </div>
                            <div class="slide">
                                <img src="asserts/projectLogement4.jpg" alt="projectLogement Image 4">
                            </div>
                            <div class="slider-navigation">
                                <div class="slider-button active"></div>
                                <div class="slider-button"></div>
                                <div class="slider-button"></div>
                                <div class="slider-button"></div>
                            </div>
                        </div>

                        <div class="slider" id="slider8">
                            <div class="slide active">
                                <img src="asserts/projectRerchercheRecette1.jpg" alt="projectRerchercheRecette 1mage 1">
                            </div>
                            <div class="slide">
                                <img src="asserts/projectRerchercheRecette2.jpg" alt="projectRerchercheRecette Image 2">
                            </div>
                            <div class="slide">
                                <img src="asserts/projectRerchercheRecette3.jpg" alt="projectRerchercheRecette Image 2">
                            </div>
                            <div class="slide">
                                <img src="asserts/projectRerchercheRecette4.jpg" alt="projectRerchercheRecette Image 2">
                            </div>
                            <div class="slider-navigation">
                                <div class="slider-button active"></div>
                                <div class="slider-button"></div>
                                <div class="slider-button"></div>
                                <div class="slider-button"></div>
                            </div>
                        </div>          

                        <div class="slider" id="slider9">
                            <div class="slide active">
                            <img src="asserts/projectPhotographer1.jpg" alt="projectPhotographer 1mage 1">
                            </div>
                            <div class="slide">
                            <img src="asserts/projectPhotographer2.jpg" alt="projectPhotographer Image 2">
                            </div>
                            <div class="slide">
                            <img src="asserts/projectPhotographer3.jpg" alt="projectPhotographer Image 2">
                            </div>
                            <div class="slider-navigation">
                                <div class="slider-button active"></div>
                                <div class="slider-button"></div>
                                <div class="slider-button"></div>
                            </div>
                        </div>

                        <div class="slider" id="slider10">
                            <div class="slide active">
                                <img src="asserts/ohmyfood1.png" alt="projectOhmyfood 1mage 1">
                            </div>
                            <div class="slide">
                                <img src="asserts/ohmyfood2.png" alt="projectOhmyfood 1mage 2">
                            </div>
                            <div class="slide">
                                <img src="asserts/ohmyfood3.png" id="image-vertical"alt="projectOhmyfood 1mage 3">
                            </div>
                            
                            <div class="slider-navigation">
                                <div class="slider-button active"></div>
                                <div class="slider-button"></div>
                                <div class="slider-button"></div>
                            </div>
                        </div>                           
             </div>
                   
        

`
newdivPortfolio.innerHTML = portfolioHTML ;
sectionPortfolio.appendChild(newdivPortfolio);
