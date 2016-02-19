var edit_tripdiary = require("../edit_tripdiary.json");

exports.edit_tripdiary = function(req, res) {
	var newData = {
		"tripname": req.query.tripname,
		"date": req.query.date,
		"imgPath": "http://lorempixel.com/400/400/city",
		"subname": req.query.subname,
		"description": req.query.description,
		"aboutrip": req.query.aboutrip,
		"aboutdesc": req.query.aboutdesc,
	}
	edit_tripdiary["edit_tripdiary"].push(newData);
	res.render('edit_tripdiary', edit_tripdiary);
}