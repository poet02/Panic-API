const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: process.env.db_user,
  password: process.env.db_password,
  port: process.env.db_port,
  database: process.env.db_name
});

module.exports = pool;
