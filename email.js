var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jiofi22002@gmail.com',
    pass: 'gudan123@2002'
  }
});

var mailOptions = {
  from: 'jiofi22002@gmail.com',
  to: 'Adeebzaidi121@gmail.com',
  subject: 'Bhai h ky',
  text: 'tu bhai h beta'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});