const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "joke",
      content: "This is the firt joke",
    },
    {
      id: 2,
      title: "Second joke",
      content: "This is the second joke",
    },
    {
      id: 1,
      title: "third joke",
      content: "This is the third joke",
    },
    {
      id: 1,
      title: "fourth joke",
      content: "This is the fourth joke",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
