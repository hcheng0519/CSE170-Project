
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');


var index_proj = require('./routes/index_proj');
var feature_one = require('./routes/feature_one');
var signup = require('./routes/signup');
var pro_land = require('./routes/pro_land');

var search_results = require('./routes/search_results');
var saved_profiles = require('./routes/saved_profiles');
var saved_trips = require('./routes/saved_trips');

//var edit_tripdiary = require('./routes/edit_tripdiary');
var travel_diary = require('./routes/travel_diary');

var edit_tripdiary = require('./routes/edit_tripdiary');



// Example route
// var user = require('./routes/user');
//var homepage_data = require('./homepage_data.json');

var app_proj = express();


// all environments
app_proj.set('port', process.env.PORT || 3000);
app_proj.set('views', path.join(__dirname, 'views'));
app_proj.engine('handlebars', handlebars());
app_proj.set('view engine', 'handlebars');
app_proj.use(express.favicon());
app_proj.use(express.logger('dev'));
app_proj.use(express.json());
app_proj.use(express.urlencoded());
app_proj.use(express.methodOverride());
app_proj.use(express.cookieParser('Intro HCI secret key'));
app_proj.use(express.session());
app_proj.use(app_proj.router);
app_proj.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app_proj.get('env')) {
  app_proj.use(express.errorHandler());
}

// Add routes here
app_proj.get('/', index_proj.viewData);
app_proj.get('/index_proj', index_proj.viewData);
app_proj.get('/feature_one', feature_one.main);

app_proj.get('/search_results', search_results.main);
app_proj.get('/signup', signup.main);
app_proj.get('/pro_land', pro_land.main)

app_proj.get('/saved_profiles', saved_profiles.main);
app_proj.get('/saved_trips', saved_trips.main);

app_proj.get('/travel_diary', travel_diary.main);
//app_proj.get('/edit_tripdiary', edit_tripdiary.main);

app_proj.get('/edit_tripdiary', edit_tripdiary.main);


//app_proj.get('/project/:id', project.projectInfo);
// Example route
// app_proj.get('/users', user.list);

http.createapp_proj(app_proj).listen(app_proj.get('port'), function(){
  console.log('Express app_proj listening on port ' + app_proj.get('port'));
});
