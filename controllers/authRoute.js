const { ensureAuthenticated } = require('../helper/auth'),
	conn = require("../config/connect"),
	bcrypt = require("bcrypt-nodejs");

module.exports = function(app, passport) {
	// =====================================
	// LOGIN ===============================
	// =====================================

	//get the create password form
	app.get('/createpassword',(req,res)=>{
		res.render('users/createPass');
	});

	// show the login form
	app.get('/login', (req, res) => {
		res.render('users/login', { message: req.flash('loginMessage') });
	});

	// process the login form without password
	app.post(
		'/login',
		passport.authenticate('local', {
			successRedirect: '/profile', 
			failureRedirect: '/login', 
			failureFlash: true, 
		}),
		function(req, res) {
			if (req.body.remember) {
				//maximum time cookie stays in browser in ms - 30 days
				req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; //keys is used to encrpyt the cookie
			} else {
				req.session.cookie.expires = false;
			}
			res.redirect('/');
		});

	// general signup
	app.get('/generalsignup',(req,res)=>{
		res.render('users/generalsignup');
	});

	//create account FOR GENERAL users
	app.get('/signupgeneral',(req,res)=>{
		res.render('users/signupgeneral')
	});


	// =====================================
	// SIGNUP ==============================
	// =====================================
	// k - show the signup form
	app.get('/signup', function(req, res) {
		// render the page and pass in any flash data if it exists
		res.render('users/signup', { message: req.flash('signupMessage') });
	});

	//k - process email
	app.post('/processingemail',(req,res)=>{
			//check that email is our database
			conn.query(`SELECT * from users WHERE email="${req.body.email}"`,(err,rows)=>{
				let errors=[];
				if(err) return err;
				if(!rows.length)
				{
					errors.push({ text: 'email does not exist ' });
				} 
				if (errors.length > 0) {
					res.render('users/signup', {
						errors: errors[0].text,
						email: req.body.email
					});
				} else {
					res.redirect('/createpassword')
				}
			})
	});

	// process the signup form
	app.post('/signup',(req,res)=>
	{
		let errors = [];

		// second check email is correct
		conn.query(`SELECT * FROM users WHERE email="${req.body.email}"`,(err,rows)=>
		{
				if(err) return err;
				if(!rows.length)
				{
					errors.push({ text: 'email does not exist ' });
				} 
				//make sure id is correct
				conn.query(`SELECT * FROM users WHERE user_id="${req.body.code}"`,(err,rows)=>{
					if(err) return err;
					if(!rows.length)
					{
						errors.push({ text: 'wrong unique code ' });
					}
					//password check
					if (req.body.password !== req.body.password2) {
						errors.push({ text: 'Passwords do not match' });
					}
					if (req.body.password.length < 5) {
						errors.push({ text: 'Password must be at least 5 characters' });
					}
					//send your erros
					if (errors.length > 0) {
						res.render('users/createPass', {
							errors: errors[0].text,
							email: req.body.email,
							password: req.body.password,
							password2: req.body.password2,
						});
					} else {
								// all is good
						//hash the password
						let salt = bcrypt.genSaltSync(10);
						let hash = bcrypt.hashSync(req.body.password, salt);
						// Store hash in your password DB.
						conn.query(`UPDATE users SET password="${hash}" WHERE user_id="${req.body.code}"`,(err,rows)=>{
							if(err) throw err;
						})
						//redirect to login
						res.redirect('/login');
					} 
				});
		});
	});
	//general signup post
	app.post('/generalSignup',(req,res)=>{
		console.log("body = ",req.body);
		res.render('users/createGeneralUser')
	})

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', ensureAuthenticated, (req, res) => {
		req.logout();
		res.redirect('/');
	});
};
