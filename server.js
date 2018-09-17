var express = require('express'),
    app = express(),
    port = process.env.PORT || 3030,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(function(req, res) {
//     res.status(400).send({ code: 404, message: "Not found" });
// });
var routes = require('./api/routes/api_route'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Server starting ... on Port: ' + port);