const express = require("express");
const cors = require("cors");
const app = express();
const { Sequelize } = require("sequelize");

var indexRouter = require('./routes/index');

// // Set env variables in dev env
// if (app.get('env') == 'development') require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use('/', indexRouter);


const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  console.log(`Server is running.`);

  const sequelize = new Sequelize('aura', 'postgres', 'pass', {
    host: 'localhost',
    port: 5433,// process.env.db_port,
    database: 'aura', // process.env.db_name
    dialect: "postgres",
  });

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});

