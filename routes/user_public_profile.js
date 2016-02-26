var data = require('../user_public_profile.json');

exports.main = function(req, res) {
	res.render('user_public_profile', data);
}