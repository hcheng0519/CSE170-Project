var data = require('../public_profile.json');

exports.main = function(req, res) {
	res.render('public_profile', data);
}