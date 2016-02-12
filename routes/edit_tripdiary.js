var edit_tripdiary = require("../edit_tripdiary.json");

exports.main = function(req, res) {
	res.render('edit_tripdiary', edit_tripdiary);
}