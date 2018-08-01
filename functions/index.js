const nodemailer = require('nodemailer');
const rp = require('request-promise');
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require("express")
const cors = require("cors")

admin.initializeApp(functions.config().firebase);

const app = express()

app.use(cors({ origin: true }))

app.post("/email", (req, res) => {
  console.log(req.body)
  const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '<REPLACE ME>',
      pass: '<REPLACE ME>'
    },
    tls: { 
      rejectUnauthorized: false 
    }
  });
  
  sendEmail(req.body).then(()=> { 
    res.json({
      success: true,
      message: "Mensaje enviado!"
    })
  }).catch(reason => {
    res.json({
      success: false,
      message: "Error, inténtalo mas tarde."
    })
  });

  //recaptcha validation
  // rp({
  //   uri: 'https://recaptcha.google.com/recaptcha/api/siteverify',
  //   method: 'POST',
  //   formData: {
  //       secret: '<REPLACE ME>',
  //       response: req.body['g-recaptcha-response']
  //   },
  //   json: true
  // }).then(result => {
  //   if (result.success) {
  //     console.log('Mensaje enviado!')
  //     sendEmail(req.body).then(()=> { 
  //       res.json({
  //         success: true,
  //         message: "Mensaje enviado!"
  //       })
  //     });
  //   }
  //   else {
  //     console.log('Recaptcha failed.')
  //     res.json({
  //       success: false,
  //       message: "Recaptcha failed."
  //     })
  //   }
  // }).catch(reason => {
  //   console.log('Recaptcha req failed.')
  //   res.json({
  //     success: false,
  //     message: "Recaptcha req failed."
  //   })
  // })

  function sendEmail(body) {
    console.log('Sending email')
    const mailOptions = {
      from: `${body.email}`,
      to: '<REPLACE ME>'
    };
    // hmtl message constructions
    mailOptions.subject = 'Mensaje de contacto de "laboratoriogap.ga"';
    mailOptions.html = `<p><b>Name: </b>${body.name}</p>
                        <p><b>Email: </b>${body.email}</p>
                        <p><b>Subject: </b>Contacto</p>
                        <p><b>Message: </b>${body.text}</p>`;
    return mailTransport.sendMail(mailOptions);
  }
})

const api = functions.https.onRequest(app)

module.exports = {
  api
}