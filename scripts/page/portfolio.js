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

                <div class="KK">
                    <div class="slider-box active" id="sliderBox_1>
                    
                        <div class="box" id="box_1">
                            <img src="asserts/argentBank1.png" alt="projectGraphique 1mage 1">
                            <span class="box_bg">Application pour un compte utilisateur bancaire<br>Calls API<br> ( React / Redux / Swagger )</span>
                       </div>

                        <div class="box" id="box_2">
                            <img src="asserts/projectGraphique.jpg" alt="projectGraphique 1mage 1">
                            <span class="box_bg">Un tableau de bord d'analytics sportif <br> calls : un mock des données de l'API / Real service API<br> ( React / Recharts )</span>
                       </div>

                       <div class="box" id="box_3">
                            <img src="asserts/projectRH1.png" alt="projectRH 1mage 1">
                            <span class="box_bg">SaaS RH <br>Débugger et tester<br>( React / JEST )</span>
                       </div>

                       <div class="box" id="box_4">
                            <img src="asserts/logement1.png" alt="projectLogement 1mage 1">
                            <span class="box_bg">Site des logements <br>( React / React-Router )</span>
                       </div>

                        <div class="box" id="box_5">
                            <img src="asserts/projectPhotographer1.jpg" alt="projectPhotographer 1mage 1">
                            <span class="box_bg">Site de Photographer responsive et accesible<br>( HTML / CSS / Java Script )</span>
                       </div>

                        <div class="box" id="box_6">
                            <img src="asserts/projectRerchercheRecette1.jpg" alt="projectRerchercheRecette 1mage 1">
                            <span class="box_bg">Site de cuisine<br>( HTML / CSS / Java Script )<br>Creation de la fonctionnalité de recherche et des filtres </span>
                        </div>

                    </div>

                    <div class="slider-box" id="sliderBox_2>  
                    </div>
                    <div class="sliderBox-button active"></div>
                    <div class="sliderBox-button"></div> 
                    
                </div>
                   
                    <div class="slider-container">
                         <span class="close-button"></span>

                         <div class="slider" id="slider1">
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

                         <div class="slider" id="slider2">
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

                        <div class="slider" id="slider3">
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

                        <div class="slider" id="slider4">
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

                        <div class="slider" id="slider5">
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
                        
                        <div class="slider" id="slider6">
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
                    </div>
                    

            </div>

`
newdivPortfolio.innerHTML = portfolioHTML ;
sectionPortfolio.appendChild(newdivPortfolio);