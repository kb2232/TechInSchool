const keys = require("../models/config/keys");

module.exports = (app) => 
{
  app.post('/send', (req, res) => {
    const nodemailer = require('nodemailer');

    // Create transporter object using Gmail's SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        // true for 465, false for other ports
        secure: false,
        // Enter in credentials for emails to be sent from
        auth: {
            user: keys.EMAIL_USER,
            pass: keys.EMAIL_PASSWORD
        }
    });

    // Setup for the Email that is being sent.
    let mailOptions = {
        // From
        from: 'TechInSchoolsCo@gmail.com',
        // To
        to: 'TechInSchoolsCo@gmail.com',
        // Subject Line
        subject: req.body.subject,
        // Message Sent
        text: 'Name : ' + req.body.name 
            + '\nFrom : ' + req.body.email
            + '\nMessage : ' + req.body.message
    }; 

    // Send the Email with the transporter's object
    transporter.sendMail(mailOptions, (error, info) => {
        // Return Error if applicable
        if (error) {
            return console.log(error);
        }

        // If message has been sent, send a viewable message onto the contact form
        res.render('index/contact', { 
          message: 
          "YOUR MESSAGE HAS BEEN SENT!"
        });
    });
  });
}