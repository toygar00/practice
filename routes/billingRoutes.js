const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');
stripe.charges.create(
	{
		amount: 2000,
		currency: 'gbp',
		source: 'tok_mastercard', // obtained with Stripe.js
		description: 'Charge for mason.martinez@example.com'
	},
	function(err, charge) {
		// asynchronously called
	}
);

module.exports = app => {
	app.post('/api/stripe', requireLogin, async (req, res) => {
		const charge = await stripe.charges.create({
			amount: 500,
			currency: 'usd',
			source: req.body.id,
			description: '$5 description'
		});

		// set by passport
		req.user.credits += 200;
		const user = await req.user.save();

		res.send(user);
	});
};
