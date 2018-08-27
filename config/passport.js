const passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs'),
	connection = require('./connect');

module.exports = function(passport) {
	passport.serializeUser((newuser, done) => {
		//newuser is what is returned loggin
		//'done' is a callback
		done(null, newuser.id);
		/*newuser.id -
    it is the id that sql use to identify rows. We cannot assume that every user has a google id so mongo creates a unique mongo _id to each user. This id is then set as the cookie, and sent to browser
    */
	});
	passport.deserializeUser((id, done) => {
		//id = is the same thing as the newuser.id from the serializeUser()
		// we find that user in the database, return it with newuser, then call done()
		connection.query(`SELECT * FROM users WHERE id=${id}`, (err, rows) => {
			done(err, rows[0]);
		});
	});

	// =========================================================================
	// LOCAL LOGIN =============================================================
	// =========================================================================
	// we are using named strategies since we have one for login and one for signup
	// by default, if there was no name, it would just be called 'local'

	passport.use(
		new LocalStrategy(
			{
				usernameField: 'email',
				passwordField: 'password',
				failureFlash: true,
				passReqToCallback: true, // allows us to pass back the entire request to the callback
			},
			(req, email, password, done) => 
			{
				// find user in our database
				connection.query('SELECT * FROM users WHERE email = ?', [email], (err, rows) => 
				{
					if (err) return done(err);
					if (!rows.length) {
						return done(null, false, req.flash('loginMessage', 'No user found.'));
					}

					const correctUser = [];

					rows.forEach(row => {
						if(row.password===undefined || row.password===null || bcrypt.compareSync(password, row.password))
						{
							// return the user we want with matching password
							console.log("matched user = ",row);
							correctUser.push(row);
						} 
					});
					// if the user is found but the password is wrong
					if (correctUser.length===0 || correctUser[0].password===undefined || correctUser[0].password===null || !bcrypt.compareSync(password, correctUser[0].password))
						return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
					return done(null, correctUser[0]);
				});
			}
		)
	);
};
