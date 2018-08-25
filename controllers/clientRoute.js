const {ensureAuthenticated} = require('../helper/auth');

module.exports = app => {
	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	app.get('/', (req, res) => {
		res.render('index/welcome');
	});

	// =====================================
	// PROFILE SECTION =========================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/profile', ensureAuthenticated, function(req, res) {
		res.render('users/profile', {
			user: req.user, // get the user out of session and pass to template
		});
	});

};
