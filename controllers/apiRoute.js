const keys = require('../config/keys');
const {ensureAuthenticated} = require('../helper/auth');
module.exports = app => {

    app.get('/contact',(req,res)=>{
        res.render("index/contact")
    })

	app.post('/send', (req, res) => {
		console.log(req.body);

		const nodemailer = require('nodemailer');

		// create reusable transporter object using the default SMTP transport
		let transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 587,
			secure: false, // true for 465, false for other ports
			auth: {
				user: keys.EMAIL_USER, // generated ethereal user
				pass: keys.EMAIL_PASSWORD, // generated ethereal password
			},
		});

		// setup email data with unicode symbols
		let mailOptions = {
			from: req.body.email, // sender address
			to: keys.EMAIL_USER, // list of receivers
			subject: req.body.subject + ' from ' + req.body.name, // Subject line
			text: req.body.message, // plain text body
			//html: '<b>Hello world?</b>' // html body
		};

		// send mail with defined transport object
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
			}
			console.log('Message sent: %s', info.messageId);
			// Preview only available when sending through an Ethereal account
			console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

			res.render('index/contact', {
				message: 'YOUR MESSAGE HAS BEEN SENT!',
			});

			// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
			// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
		});
	});
};
