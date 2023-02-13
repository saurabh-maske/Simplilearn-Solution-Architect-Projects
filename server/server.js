const express = require("express");
const mysql = require("mysql2");
var cors = require('cors');
require('dotenv').config();


const app = express();

//mysql-1.crrp10beug98.ap-south-1.rds.amazonaws.com
const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password:process.env.password,
  database: process.env.database
});

app.use(express.json());

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });
  
app.use(cors())

app.post("/save-data", (req, res) => {
  const { name, age } = req.body;
  const sql = `INSERT INTO emp_details (name, age) VALUES (?, ?)`;
  connection.query(sql, [name, age], (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.send("Data saved successfully.");
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
