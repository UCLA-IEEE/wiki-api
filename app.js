const express = require('express');
const morgan = require('morgan');
let app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));

app.get('/', function(req, res) {
  console.log('Jeffrey');
  res.send('Hello World!');
});

app.get('/page/:slug', function(req, res) {
  console.log(req.params.slug);
  let pageData = {
    title: 'Email Forwarding',
    slug: 'email-forwarding',
    contributors: ['Jeffrey Chan', 'Kathy Daniels'],
    content:
      '<h1>EMAIL FORWARDING AND ALIASING</h1> <p>Written by Jeffrey Chan</p>'
  };
  res.json(pageData);
});

app.listen(app.get('port'), function() {
  console.log('Started server at port 3000.');
});
