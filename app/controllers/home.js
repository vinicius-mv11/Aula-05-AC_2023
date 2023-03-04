module.exports = function() {
  var controller = {};
  controller.index = function(req, res) {
    //retorna a página index.ejs
    res.render('index', { nome: 'ExpressJS', href: 'https://aula-02-ac-solution.dswa5.repl.co/Logo.jpg' });
  };
  return controller;
}