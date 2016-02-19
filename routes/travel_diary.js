var data = require('../travel_diary.json');

exports.main = function(req, res){
  	res.render('travel_diary')
}

exports.choose_diary = function(req, res){
	if(req != null){
		var person = req.body.person;
		var description = "";
		
	}

	for(var i = 0; i < data["diaries"].length; i++){
		if(data["diaries"][i].person == person){
			data["diaries"].push(person);
		}
	}
}