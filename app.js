var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')

var connection = require('./app/config/connection');
var routes = require('./app/controllers/routes');

var allowlist = ['http://localhost:3000']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

var app = express();
app.use(cors(corsOptionsDelegate))
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

connection.init();
routes.configure(app);

var server = app.listen(5000, function(){
  console.log('Server listening on port ' + server.address().port);
});
