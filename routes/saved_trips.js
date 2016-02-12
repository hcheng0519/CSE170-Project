var saved_trips = require("../saved_trips.json");

exports.main = function(req, res) {
	res.render('saved_trips', saved_trips);
}