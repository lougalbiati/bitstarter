var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  var nchar = fs.readFileSync("index.html", function (err, data) {
    if (err) throw err;
    // console.log(data);
    // response.send('Hello World 3!');
    // response.send(data);
    response.send(data.toString('utf8'));
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
