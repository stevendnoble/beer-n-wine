// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    hbs = require('hbs'),
    mongoose = require('mongoose'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    flash = require('express-flash'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

// require models
var User = require('./models/user');

// Middleware for auth
app.use(cookieParser());
app.use(session({
  secret: 'supersecretkey',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Send flash messages
app.use(flash());

// Passport config
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// configure bodyParser (for form data)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve static files from the public folder
app.use(express.static(__dirname + '/public'));

// set view engine to hbs (handlebars)
app.set('view engine', 'hbs');

// connect to mongodb
mongoose.connect('mongodb://localhost/beer_n_wine');

// routes
app.get('*', function(req, res) {
  res.render('index');
});

// API routes
app.get('/api/todos', function(req, res) {
  Todo.find(function(err, allTodos) {
    if(err) {
      res.status(500).json({ err: err.message });
    } else {
      res.json(allTodos);
    }
  });
});

app.post('/api/todos', function(req, res) {
  var newTodo = new Todo(req.body);
  newTodo.save(function(err, savedTodo) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(savedTodo);
    }
  });
});

app.get('/api/todos/:id', function(req, res) {

});

app.put('/api/todos/:id', function(req, res) {

});

app.delete('/api/todos/:id', function(req, res) {

});





// listen on port 3000
app.listen(3000, function() {
  console.log('server started');
});