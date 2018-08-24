const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs'),
	connection = require('./connect');

module.exports = function(passport) 
{
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
	// LOCAL SIGNUP ============================================================
	// =========================================================================
	passport.use(
		'local-signup',
		new LocalStrategy(
			{
				usernameField: 'email',
				passwordField: 'password',
				passReqToCallback: true, // allows us to pass back the entire request to the callback
			},
			function(req, email, pass_word, done) {
				// we are checking to see if the user trying to login already exists
				connection.query('SELECT * FROM users WHERE email = ?', [email], function(err, rows) {
					if (err) return done(err);
					if (rows.length) {
						return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
					} else {
						// if there is no user with that email
						// create the user
						var newUser = {
							firstname: req.body.fname,
							lastname: req.body.lname,
							email: email,
							password: bcrypt.hashSync(pass_word), // use the generateHash function in our user model
						};

						var insertQuery = 'INSERT INTO users ( firstname, lastname, email, pass_word ) values (?,?,?,?)';

						connection.query(insertQuery,[newUser.firstname, newUser.lastname, newUser.email, newUser.password],function(err, result) {
							if(err) throw err;
								console.log("result=",result);
								newUser.id = result.insertId;

								return done(null, newUser);
							}
						);
					}
				});
			}
		)
	);

	// =========================================================================
	// LOCAL LOGIN =============================================================
	// =========================================================================
	// we are using named strategies since we have one for login and one for signup
	// by default, if there was no name, it would just be called 'local'

	passport.use(
		'local-login',
		new LocalStrategy(
			{
				usernameField: 'email',
				passwordField: 'password',
				passReqToCallback: true, // allows us to pass back the entire request to the callback
			},
			function(req, email, pass_word, done) {
				// callback with email and password from our form
				connection.query('SELECT * FROM users WHERE email = ?', [email], function(err, rows) {
					if (err) return done(err);
					if (!rows.length) {
						return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
					}

					// if the user is found but the password is wrong
					if (!bcrypt.compareSync(pass_word, rows[0].pass_word))
						return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

					// all is well, return successful user
					return done(null, rows[0]);
				});
			}
		)
	);
};
