const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  console.log("GET response started");
});

app.listen(port, () => {
  console.log("App chalu zali ahe");
});
