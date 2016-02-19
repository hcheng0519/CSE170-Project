var homepage_data = require('../homepage_data.json');

exports.main = function(req, res){
  	res.render('user_homepage', homepage_data)
}