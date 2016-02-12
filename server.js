
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

var server = express();


// all environments
server.set('port', process.env.PORT || 3000);
server.set('views', path.join(__dirname, 'views'));
server.engine('handlebars', handlebars());
server.set('view engine', 'handlebars');
server.use(express.favicon());
server.use(express.logger('dev'));
server.use(express.json());
server.use(express.urlencoded());
server.use(express.methodOverride());
server.use(express.cookieParser('Intro HCI secret key'));
server.use(express.session());
server.use(server.router);
server.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == server.get('env')) {
  server.use(express.errorHandler());
}

// Add routes here
server.get('/', index_proj.viewData);
server.get('/index_proj', index_proj.viewData);
server.get('/feature_one', feature_one.main);

server.get('/search_results', search_results.main);
server.get('/signup', signup.main);
server.get('/pro_land', pro_land.main)

server.get('/saved_profiles', saved_profiles.main);
server.get('/saved_trips', saved_trips.main);

server.get('/travel_diary', travel_diary.main);
//server.get('/edit_tripdiary', edit_tripdiary.main);

server.get('/edit_tripdiary', edit_tripdiary.main);


//server.get('/project/:id', project.projectInfo);
// Example route
// server.get('/users', user.list);

http.createServer(server).listen(server.get('port'), function(){
  console.log('Express server listening on port ' + server.get('port'));
});
