/*
 * GET home page.
 */

// exports.viewFeatures = function(req, res){
//   // controller code goes here 
//   var feature = req.params.name;
//   console.log("The feature name is: " + feature);

//   res.render('feature_one', {'featureName': feature});
// };


exports.main = function(req, res){
	res.render('feature_one');
};