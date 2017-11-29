var path = require('path');
var express = require('express');
var app = express();

// serve static assets normally
app.use(express.static(__dirname + '/public'))

// handle every other route with index.html
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});


app.listen(process.env.PORT || 8080);