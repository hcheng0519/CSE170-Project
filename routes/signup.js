exports.toProfile= function(req, res){
	window.location.assign('profile_landing')
}

exports.main = function(req, res){
  	res.render('signup')
}