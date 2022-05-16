const config = require('./db-config')
const express = require("express"),
  app = express(),
  bodyParser = require("body-parser")
const mongoose = require('mongoose');

const newspapersRoute = require('./src/routes/newspapers.js')



const errorHandler = (error, request, response, next) => {
  // Error handling middleware functionality
  console.log( `error ${error.message}`) // log the error
  const status = error.status || 400
  // send back an easily understandable error message to the caller
  response.status(status).send(error.message)
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes definition
app.use('/newspapers', newspapersRoute);

// Error handler
app.use(errorHandler);

// DB connection
mongoose.connect(config.mongodb_url)

app.listen(config.port, function () {
  console.log("Node server running on http://localhost:3000");
});
