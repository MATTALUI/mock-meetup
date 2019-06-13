const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT_NUMBER || 3000;

app.use(morgan());

app.use('*', (req, res, next)=>{
  res.send("hello world");
});

app.listen(port, '0.0.0.0', ()=>{
  console.log('listening on port: ', port);
});
