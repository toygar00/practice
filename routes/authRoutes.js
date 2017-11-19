const passport = require('passport');

module.exports = app => {
	// First time
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	// Have the code get the profile
	app.get('/auth/google/callback', passport.authenticate('google'));

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.send(req.user);
	});

	app.get('/api/current_user', (req, res) => {
		console.log('wtf');
		res.send(req.user);
	});
};
