var express = require('express');
var bodyParser = require('body-parser');
var load = require('express-load');

//var home = require('../app/routes/home');
module.exports = function() {
  //instancia do express
  var app = express();

  //porta da aplicacao
  app.set('port', 3000);

  //Middleware
  app.use(express.static('./public'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(require('method-override')());

  //definir engine para a view
  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  //carregar pastas
  load('models', { cwd: 'app' }).then('controllers').then('routes').into(app);

  //home(app);
  return app;
};