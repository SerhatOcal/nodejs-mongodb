var express         = require('express');
var path            = require('path');
var app             = express();
var ejsLayout       = require('express-ejs-layouts');
var bodyParser      = require('body-parser');
app.use("/public", express.static(path.join(__dirname, 'public')));
var db = require('./app_server/model/db');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/app_server/views'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(ejsLayout);

require('./app_server/router/routeManager')(app);

app.listen(8000);