const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
require("dotenv").config();

var indexRouter = require('./routes/index');

// // Set env variables in dev env
// if (app.get('env') == 'development') require('dotenv').config();

app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  //server static content
  //npm run build
  app.use(express.static(path.join(__dirname, "client/build")));
}

console.log(__dirname);
console.log(path.join(__dirname, "client/build"));

app.use('/', indexRouter);


const PORT = process.env.PORT || 8000;

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, async () => {
  console.log(`Server is running on port: `, PORT);
});

