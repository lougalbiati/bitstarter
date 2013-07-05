var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

// app.get('/', function(request, response) {
//   response.send('Hello World 4!');
// });
app.get('/', function(request, response) {
  var buf = fs.readFileSync("index.html");
  var str = buf.toString('utf8');
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
