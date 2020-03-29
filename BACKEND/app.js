// imports
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// imports of routes for all tools and tools that are the users
const toolsRoute = require("./routes/tools-route");
const myToolsRoute = require("./routes/myTools-route");

// creating my express app
const app = express();

// body parser so i am able to use it everywhere with the request coming in
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    next();
});

// middleware
app.use("/", toolsRoute);
app.use("/mytools", myToolsRoute);

// connecting mongoDB/mongoose with my back in to access data
mongoose
  .connect(
    `mongodb+srv://laithadi:Laith1999@cluster0-wnev0.mongodb.net/library?retryWrites=true&w=majority`
  )
  .then(() => app.listen(2000))
  .catch(err => {
    console.log(err);
  });
