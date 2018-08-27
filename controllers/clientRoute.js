const {ensureAuthenticated} = require('../helper/auth');
module.exports = app => {
	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	app.get('/', (req, res) => {
		res.render('index/welcome');
	});
	// =====================================
	// PROFILE SECTION =====================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/profile', ensureAuthenticated, (req, res)=>{
		res.render('users/profile', {
			user: req.user, // get the user out of session and pass to template
		});
	});
	// =====================================
	// ATTENDANCE SECTION =========================
	// =====================================
	app.get('/attendance', ensureAuthenticated,(req, res)=>{
		res.render('teacher_stories/attendance',{
			user:req.user,
		});
	});
	// =====================================
	// AGENDA SECTION =========================
	// =====================================
	app.get('/getagenda',ensureAuthenticated,(req,res)=>{
		res.render('teacher_stories/agenda',{
			user:req.user,
		})
	});
};
