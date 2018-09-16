const path = require("path");
const http = require("http");
const express = require("express");

const publicPath = path.join(__dirname, "./public");

const serverPort = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);

app.use(express.static(publicPath));

app.get("/", (req, res) => {
  console.log("getting main page");
  res.sendFile(__dirname + "/public/index.html");
});
app.get("*", function(req, res) {
  console.log("sending 404 not found");
  res.status(404).send("ERROR 404, PAGE NOT FOUND");
});

server.listen(serverPort, function() {
  console.log("server up and running at %s port", serverPort);
});
