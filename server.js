// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

// configure bodyParser (for form data)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve static files from the public folder
app.use(express.static(__dirname + '/public'));

// set view engine to hbs (handlebars)
app.set('view engine', 'hbs');

// connect to mongodb
mongoose.connect('mongodb://localhose/mean_sample');

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