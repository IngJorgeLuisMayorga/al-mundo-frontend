//Install express server
const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/almundo"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/almundo/index.html"));
});

app.get("/api/hotels", function(req, res) {
  var usersFilePath = path.join(__dirname, "server/data.json");
  var readable = fs.createReadStream(usersFilePath);
  readable.pipe(res);
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
