const express = require('express');
let app = express();

app.get('/', function(req, res) {
  console.log('Hello');
  res.send('Hello World!');
});

app.listen(3000, function() {
  console.log('Started server at port 3000.');
});
