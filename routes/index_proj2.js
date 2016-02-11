exports.viewFeatures = function(req, res){
  res.render('index_proj', {
	'feature': [
		{ 	'name': 'Carl Fredricksen 1',
		    'description': 'Traveled from here to there. Read more!',
		},
		{ 	'name': 'Carl Fredricksen 2',
		    'description': 'Traveled from here to there. Read more!',
		},	
		{ 	'name': 'Carl Fredricksen 3',
		    'description': 'Traveled from here to there. Read more!',
		},
		{ 	'name': 'Carl Fredricksen 4',
		    'description': 'Traveled from here to there. Read more!',
		}
	]
	});
};
