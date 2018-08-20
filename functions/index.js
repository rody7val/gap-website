const nodemailer = require('nodemailer')
const functions = require('firebase-functions')
const admin = require('firebase-admin')
const moment = require('moment')
// const rp = require('request-promise');
// const express = require("express")
// const cors = require("cors")
// const app = express()
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rod7val@gmail.com',
    pass: 'Smuggler1285'
  },
  tls: { 
    rejectUnauthorized: false 
  }
})

admin.initializeApp(functions.config().firebase)
// app.use(cors({ origin: true }))

// app.post("/email", (req, res) => {
//   console.log(req.body)
  
//   sendEmail(req.body).then(()=> { 
//     res.json({
//       success: true,
//       message: "Mensaje enviado!"
//     })
//   }).catch(reason => {
//     res.json({
//       success: false,
//       message: "Error, inténtalo mas tarde."
//     })
//   });

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

  // function sendEmail(body) {
  //   console.log('Sending email')
  //   const mailOptions = {
  //     from: `${body.email}`,
  //     to: '<REPLACE ME>'
  //   };
  //   // hmtl message constructions
  //   mailOptions.subject = 'Mensaje de contacto de "laboratoriogap.ga"';
  //   mailOptions.html = `<p><b>Name: </b>${body.name}</p>
  //                       <p><b>Email: </b>${body.email}</p>
  //                       <p><b>Subject: </b>Contacto</p>
  //                       <p><b>Message: </b>${body.text}</p>`;
  //   return mailTransport.sendMail(mailOptions);
  // }
// })

// })

function emailAuth(name, email, subject) {
  return mailTransport.sendMail({
    from: 'registro@laboratoriogap.com',
    to: `${email}`,
    subject: `${subject}`,
    html: `<p>Hola ${name}! Gracias por registrarte en nuestros sistema.</p>
    <p>Te mantendremos en contacto.</p>`
  })
}

const welcome = functions.auth.user().onCreate( event => {
  const user = event.data
  user.active = true
  user.admin = false
  user.created = moment().valueOf()
  // set user
  var ref = admin.database().ref('users/list/' + user.uid)
  ref.set(user)
  // set count
  ref.parent.on('value', snapshot => {
    ref.parent.parent.child('count').set(snapshot.numChildren())
  })
  // send email
  emailAuth(user.displayName, user.email, 'Registro')
})

// const api = functions.https.onRequest(app)

module.exports = {
  // api,
  welcome
}
