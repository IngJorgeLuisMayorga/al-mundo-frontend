//Install express server
const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/almundo"));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/almundo/index.html"));
});

app.get("/api/hotels", function(req, res) {
  var usersFilePath = path.join(__dirname, "/dist/almundo/server/data.json");
  var obj = JSON.parse(fs.readFileSync(usersFilePath, "utf8"));
  res.json(obj);
});

app.post("/api/hotels/hotel/", function(req, res) {});

app.get("/api/hotels/byName/:hotelname", function(req, res, next) {
  var _name = req.params.hotelname;
  var usersFilePath = path.join(__dirname, "/dist/almundo/server/data.json");
  var obj = JSON.parse(fs.readFileSync(usersFilePath, "utf8"));
  var out = obj.filter(hotel => hotel.name.includes(_name));

  res.json(out);
});

app.put("/api/hotels/stars/:stars", function(req, res) {
  var usersFilePath = path.join(__dirname, "/dist/almundo/server/data.json");
  var obj = JSON.parse(fs.readFileSync(usersFilePath, "utf8"));
  var stars = req.param.stars;
  var out = [];

  out = obj.find(function(element) {
    return element.stars.includes(stars);
  });

  console.log(out);

  res.json(out);
});

app.delete("/api/hotels/:id", function(req, res) {});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
