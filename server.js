const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan);

app.use('*', (req, res, next)=>{
  res.send("hello world");
});

app.listen('8080', '0.0.0.0', ()=>{
  console.log('listening on port 8080');
});
