const express = require('express');
const path = require('path');
const config = require('../config');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const message = require('./routes/message');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/message', message);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.set('port', (process.env.PORT || config.port));
app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
});
