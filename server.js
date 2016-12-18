var express = require('express');
var path = require('path');
var config = require('./config');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var message = require('./routes/message');

var app = express();

//View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Set static folder
app.use(express.static(path.join(__dirname, 'client')));

//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/message', message);

//Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

//
app.set('port', (process.env.PORT || config.port));
app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
});
