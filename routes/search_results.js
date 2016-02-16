var results = require('../search_results.json');

exports.main = function(req, res){
	res.render('search_results', results);
};

exports.search = function(req, res){
	for(var i = 0; i < results.["search_results"].length; i++) {
		//if(results[i].city == )
	}
}