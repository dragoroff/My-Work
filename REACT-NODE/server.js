const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const controller = require('./controller');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

controller.init(app);

let port = 5000;
app.listen(port, ()=>{console.log(`Listening to port ${port}`)});
