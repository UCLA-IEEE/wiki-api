const express = require('express');
let app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
  console.log('Hello');
  res.send('Hello World!');
});

app.listen(app.get('port'), function() {
  console.log('Started server at port 3000.');
});
