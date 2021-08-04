const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.listen(8000, () => {
  console.log(`Server is running.`);
});

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "issue_tracker",
  password: "password",
  port: 5432
});