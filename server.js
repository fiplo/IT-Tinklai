// Tool setup
var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require("mongoose");
var passport = require("passport");
var flash = require("connect-flash");

var morgan = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var session = require("express-session");

var configDB = require("./config/database.js");

// Config
mongoose.connect(configDB.url);

require("./config/passport")(passport);

// Express setup
app.use(morgan("dev")); //Log everything
app.use(cookieParser()); // Read cookies
app.use(bodyParser()); // get info from html forms

app.set("view engine", "ejs"); // ejs templating

// Passport configuration
app.use(session({ secret: "itreallydobelikethatsometimes" })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // Persistent login sessions
app.use(flash());

// Routes
require("./app/routes.js")(app, passport);

// Launch
app.listen(port);
console.log("Server launched on port " + port);
