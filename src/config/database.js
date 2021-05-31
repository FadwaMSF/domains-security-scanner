import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

//Console.log a successful DB connection msg
pool.on("connect", () => {
  console.log("Connection with the DB has been established");
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
