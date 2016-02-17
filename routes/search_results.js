var results = require('../search_results.json');

exports.main = function(req, res){
	res.render('search_results', results);
};

exports.search = function(req, res){
	if(req != null) {
		var city = req.body.city;
		var flag = false;

		for(var i = 0; i < results["search_results"].length; i++) {
			if(results["search_results"][i].city == city) {
				flag = true;
			}
		}

		if(flag) {
			res.render('search_results');
		}
		else {
			res.render('index_proj');
		}
	}
}