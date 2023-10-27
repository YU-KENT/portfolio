const sectionContact = document.getElementById('contact')
const newdivContact = document.createElement("div")
newdivContact.classList.add("contact");
const contactHTML= `
                <img src="asserts/bg_contact.jpg" class="bg_contact" alt="background photo section ontact">
                <h2>CONTACTEZ - MOI</h2>
                <div class="contact-contents">
                    <p class="contact-contents_p">
                        <span>Vous souhaitez me contacter ?</span>
                        <span>Vous pouvez dès maintenant m’envoyer un message . </span>
                        <span>Si le formulaire ne fonctionne pas, vous pouvez me contacter via ce mail :</span>
                        <a href="mailto:tianyu.tina@gmail.com">tianyu.tina@gmail.com</a>
                    </p>
                    <div class="formulaire">
                      <form action="/contact" method="post">
                        <input type="text" name="nom" placeholder="Nom" required>
                        <input type="email" name="email" placeholder="E-mail" required>
                        <textarea name="message" placeholder="Message" required></textarea>
                        <button type="submit">Envoyer</button>
                      </form>
                    </div>
                    <div class="contact-infos">
                        <div class="info">
                            <img src="asserts/mail.svg" alt="icon mail">
                            <a href="mailto:tianyu.tina@gmail.com">tianyu.tina@gmail.com</a>
                        </div>
                        <div class="info">
                          <img src="asserts/phone.svg" alt="icon telephone">
                          <span> + 7 67 52 70 27</span>
                        </div>
                        <div class="info">
                          <img src="asserts/whitehouse.svg" alt="icon telephone">
                          <span> 95800 Cergy</span>
                        </div>
                    </div>
               </div>

`
newdivContact.innerHTML = contactHTML ;
sectionContact.appendChild(newdivContact);