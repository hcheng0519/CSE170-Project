var data = require("../data.json");

exports.addPicture = function(req, res) {  
	// Your code goes here
	console.log(data);
	var newPicture = {
		"pictitle": req.query.pictitle,
		"description": req.query.description,
		"imagesrc": "http://lorempixel.com/400/400/city", //this will we replaced with file path
	}														//where images are stored through database

	data["addPicture"].push(newPicture);
	res.render('addPicture', data);
}