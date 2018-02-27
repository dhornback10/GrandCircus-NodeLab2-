var express = require("express");
var bodyParser = require("body-parser");
var tasks = require("./routes.js");
var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use("/", tasks);


var server = app.listen(3005, function() {
    var port = server.address().port;
    console.log("Express server is up and running real goodly", port);
});