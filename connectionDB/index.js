const express = require("express");
const app = express();
const connectDB = require("./db");

const port = 3000;

//body parser
app.use(express.json());

//connect to database
connectDB();

app.get("/", (req, res) => {
  console.log("I am inside handler");

  res.send("HEllo Bhushan Marathe");
});

app.listen(port, () => {
  console.log("App Started");
});
