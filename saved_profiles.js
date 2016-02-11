var saved_profiles = require("saved_profiles.json");

exports.main = function(req, res) {
	res.render('saved_profiles', saved_profiles);
}