// Generated by CoffeeScript 1.8.0
(function() {
  var app, cookieParser, express, flash, port, session, toastr;

  express = require('express');

  flash = require('connect-flash');

  session = require('express-session');

  cookieParser = require('cookie-parser');

  toastr = require('../');

  app = express();

  app.use(cookieParser('secret'));

  app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
  }));

  app.use(flash());

  app.use(toastr({
    closeButton: true
  }));

  app.get('/set', function(req, res) {
    req.toastr.info('Are you the 6 fingered man?');
    req.toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!', null, {
      closeButton: false
    });
    req.toastr.success('Have fun storming the castle!', 'Miracle Max Says', null, {
      newestOnTop: true
    });
    req.toastr.error('I do not think that word means what you think it means.', 'Inconceivable!');
    return res.end();
  });

  app.get('/clear', function(req, res) {
    req.toastr.error('This is a toast!', 'Oh no!');
    req.toastr.clear();
    req.toastr.info('The previous toasts were cleared.');
    return res.end();
  });

  app.get('/', function(req, res) {
    return res.send(req.toastr.render());
  });

  app.get('/ping', function(req, res) {
    return res.send('pong');
  });

  module.exports = app;

  if (!module.parent) {
    app.listen(port = process.env.PORT || 4000, function() {
      return console.log("Listening on " + port);
    });
  }

}).call(this);

//# sourceMappingURL=index.js.map
