/*
 * GET home page.
 */
var homepage_data = require('../homepage_data.json');

exports.viewData = function(req, res){
  	res.render('index_proj', homepage_data) //, menu_options)
  	//res.render('index_proj', menu_content) 
}