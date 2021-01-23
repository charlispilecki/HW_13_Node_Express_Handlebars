var express = require('express')
var burgersControler = require('./controllers/burgers_controller')
var exphbs  = require('express-handlebars');
 
var app = express();
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up the Express app to handle css and js files
app.use(express.static('public'))

app.use('/', burgersControler)

app.listen(8080)