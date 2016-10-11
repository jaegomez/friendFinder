// npm packages needed being declared

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// express
var app = express();
// will be on port 3000 (localh)
var PORT = process.env.PORT || '3000';

// added bodyParser to make reading data easier
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// static file express
app.use(express.static(path.join(__dirname, './app/public/')));


// ROUTES
// setting routes up from routing folder
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);



// starts server so it can listen
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
