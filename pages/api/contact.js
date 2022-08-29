require('dotenv').config()

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default async function (req, res) {
  const nodemailer = require("nodemailer");


  const transporter = nodemailer.createTransport({
    port: 587,
    host: "h25.seohost.pl",
    auth: {
      user: 'contact@aasztokholm.se',
      pass: process.env.password,
    },
    secure: false,
  });

const mailData = {
    from: 'contact@aasztokholm.se',
    to: 'contact@aasztokholm.se',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  }  

  transporter.sendMail(mailData, (err) => {
    if(err) {
       console.log(err) 
    }
      
    else {
       console.log("Email send") 
       res.send('success')
       res.status(200)
    }
      
  })  
}