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
  to: 'vipin.kishore2012@gmail.com',
  subject: 'Authentication Mail',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});