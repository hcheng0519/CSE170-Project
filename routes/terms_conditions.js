var data = require('../terms.json');

exports.main = function(req, res){
    res.render('terms_conditions', data)
}