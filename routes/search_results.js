var results = require('../search_results.json');

exports.main = function(req, res){
	res.render('search_results', results);
};