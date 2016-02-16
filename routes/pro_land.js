var data = require("../data.json");

exports.main = function(req, res){
	res.render('pro_land')
}

exports.checkLogin = function(req, res){
	//console.log(req);
	if(req != null){
		var email = req.body.email;
		var pass = req.body.password;
		var flag = false;
		var first = "";
		var last = "";

		for(var i = 0; i < data["users"].length; i++){
			if(data["users"][i].email == email && data["users"][i].password == pass){
				// first = data["users"][i].firstName;
				// last = data["users"][i].lastName;
				flag = true;
			}
		}
		if (flag) {
			data["current"].push(first+ " " + last);
			res.render('pro_land');

		} else {
			res.render('index_proj');
		}
	}
}