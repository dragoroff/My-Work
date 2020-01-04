const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const router = require("./router/routes");

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS
app.use(cors());

//Use routes
router.routes(app);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Listening to port ${port}`));