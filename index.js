const express = require("express");
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   //res.send("Got a GET Request");
//   res.sendFile("./dummy.html", { root: __dirname });
// });

// app.post("/items", (req, res) => {
//   res.send("Got a Post Request");
// });

// app.put("/items/:id", (req, res) => {
//   res.send("Got a PUT Request");
// });
// app.delete("/items/:id", (req, res) => {
//   res.send("Got a DELETE Request");
// });

const item = require("./routes/item"); //import item ki router file
const bird = require("./routes/bird");

// ...

app.use("/api", item); //name in the quotes can be anything. it is only used for routing

app.use("/api/bird", bird);

app.listen(port, () => {
  console.log(`Bhushan app listening on port ${port}`);
});
