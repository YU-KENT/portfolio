const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  const { nom, email, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'yukent848@gmail.com',
      pass: 'qsxw srir soum deez',
    },
  });

  const mailOptions = {
    from: email,
    to: 'yukent848@gmail.com',
    subject: `Nouveau message de ${nom}`,
    text: `${message}\n\nfrom ${email}`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        resolve({
          statusCode: 500,
          body: JSON.stringify({ message: 'Internal Server Error' }),
        });
      } else {
        console.log('E-mail sent:', info.response);
        resolve({
          statusCode: 200,
          body: JSON.stringify({ message: 'Email sent successfully' }),
        });
      }
    });
  });
};
