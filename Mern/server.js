const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

// Body parser middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;
// "mongodb://localhost:27017/admin"
mongoose
  .connect(db)
  .then(() => console.log("Connected to database"))
  .catch(err => console.log(err));

//Passport middleware

app.use(passport.initialize());

//Passport Config
require("./config/passport")(passport);

//Use routes

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening to port ${port}`));
