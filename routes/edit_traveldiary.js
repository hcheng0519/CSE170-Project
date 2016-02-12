var edit_traveldiary = require("../edit_traveldiary.json");

exports.main = function(req, res) {
	res.render('edit_traveldiary', edit_traveldiary);
}