var express = require('express'),
  app = express(),
  port = process.env.PORT || 3030;

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);