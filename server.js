const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT_NUMBER || 3000;
const bodyParser = require('body-parser');

app.use(morgan());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'frontend','build')));

app.use('*', (req, res, next)=>{
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

app.listen(port, '0.0.0.0', ()=>{
  console.log('listening on port: ', port);
});
