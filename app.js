const express = require("express");
const app = express();
const port = 8000;

const initOptions = {};
const pgp = require("pg-promise")(initOptions);
const cn = {
  host: "localhost",
  port: 5432,
  database: "sample",
  user: "postgres",
  password: "ppostgres",
  max: 10,
};
const db = pgp(cn);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", async (req, res) => {
  const products = await db.any("SELECT * FROM products");
  res.send(JSON.stringify(products));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
