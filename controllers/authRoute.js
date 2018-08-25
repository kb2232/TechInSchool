const {ensureAuthenticated} = require('../helper/auth');
module.exports = function(app,passport){
	// =====================================
	// LOGIN ===============================
	// =====================================
	// show the login form
	app.get('/login', (req, res) => {
		// render the page and pass in any flash data if it exists
		res.render('users/login', { message: req.flash('loginMessage') });
	});

	// process the login form
	app.post(
		'/login',
		passport.authenticate('local-login', {
			successRedirect: '/profile', // redirect to the secure profile section
			failureRedirect: '/login', // redirect back to the signup page if there is an error
			failureFlash: true, // allow flash messages
		}),
		function(req, res) {
			if (req.body.remember) {
				//maximum time cookie stays in browser in ms - 30 days
				req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; //keys is used to encrpyt the cookie
			} else {
				req.session.cookie.expires = false;
			}
			res.redirect('/');
		}
	);

	// =====================================
	// SIGNUP ==============================
	// =====================================
	// show the signup form
	app.get('/signup', function(req, res) {
		// render the page and pass in any flash data if it exists
		res.render('users/signup', { message: req.flash('signupMessage') });
	});

	// process the signup form
	app.post(
		'/signup',
		passport.authenticate('local-signup', {
			successRedirect: '/profile', // redirect to the secure profile section
			failureRedirect: '/signup', // redirect back to the signup page if there is an error
			failureFlash: true, // allow flash messages
		})
	);

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout',ensureAuthenticated,(req, res)=> {
		req.logout();
		res.redirect('/');
	});
};
