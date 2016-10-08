// npm packages needed being declared

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// express
var app = express();
// will be on port 3000
var PORT = process.env.PORT || '3000';


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


app.use(express.static(path.join(__dirname, 'app/public/')));


require('./routing/api-routes.js')(app);
require('./routing/html-routes.js')(app);




app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
