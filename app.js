const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); // Installez le package 'nodemailer' avec npm


const app = express();
const port = 3000; // Choisissez le port que vous préférez

app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur http://localhost:${port}`);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname)); // Pour servir les fichiers statiques (comme le HTML)

// Afficher le formulaire
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  console.log("Get")
});

// Traiter le formulaire de contact
app.post('/contact', (req, res) => {
 console.log(req,res)
  const { nom, email, message } = req.body;

  // Configurer le transporteur SMTP (utilisez vos propres paramètres)
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'tianyu.tina@gmail.com',
      pass: 'dqgh yzpz flty goyz',
    },
  });

  const mailOptions = {
    from: email,
    to: 'tianyu.tina@gmail.com',
    subject: `Nouveau message de ${nom}`,
    text: message,
  };

  // Envoyer l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.redirect('/erreur.html'); // Page d'erreur
    } else {
      console.log('E-mail envoyé : ' + info.response);
      res.redirect('/confirmation.html'); // Page de confirmation
    }
  });
});


