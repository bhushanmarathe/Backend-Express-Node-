// const express = require("express");
// const app = express();
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT;

const connectDB = require("./db/index");

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Product app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed", err);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.listen(port, () => {
//   console.log(`Product app listening on port ${port}`);
// });
