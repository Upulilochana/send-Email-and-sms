var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'upulilochana@gmail.com',
           pass: 'ullp1994'
       }
   });
   const mailOptions = {
    from: 'upulilochana@gmail.com', // sender address
    to: 'krishany.alageshwaran@ge.com', // list of receivers
    subject: 'Subject of your email', // Subject line
    html: '<p>Your html here</p>'// plain text body
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });
 const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: '2d18fe05',
  apiSecret: 'CFd8UOUOaaLlhI7N',
});

const from = 'Nexmo';
const to = '94713949522';
const text = 'Hello from Nexmo';

nexmo.message.sendSms(from, to, text);