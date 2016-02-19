var support_data = require('../support_help.json');

exports.main = function(req, res){
  	res.render('support_help', support_data)
}

exports.main_user = function(req, res){
	res.render('support_help_user', support_data)
}