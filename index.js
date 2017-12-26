const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
	// Express will server up production assets (main js/css)

	app.use(express.static('client/build'));

	// Express will server index.html if route is not recognised
	const path = require('path');

	console.log('ENV = PRODUCTION, PRE *');
	app.get('*', (req, res) => {
		console.log('ENV = PRODUCTION, AFTER *');

		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.listen(PORT);
