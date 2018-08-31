const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const router = require("./router");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// App setup
app.use(cors());

app.use(morgan("combined"));

app.use(bodyParser.json({ type: "*/*" }));

router(app);

// Server setup
const port = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log("Server listening on port", port);
});

mongoose.connect(
  "mongodb://localhost:27017/database",
  { useNewUrlParser: true },
  () => {
    console.log("Connected to database");
  }
);
