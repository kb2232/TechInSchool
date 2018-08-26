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

	// Most likely will need confirmation that a teacher is logged in,
	// Currently put as a route from the home page.
	// TODO: Remove later, add as a proper route when teacher is logged in.
	app.get('/attendance', function(req, res){
		res.render('teacher_stories/attendance');
	});

};
