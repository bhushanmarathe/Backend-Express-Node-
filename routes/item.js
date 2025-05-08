//item specific routes to store karegi
const express = require("express");
//const app = express();
const router = express.Router();

// define the home page route
// router.get("/", (req, res) => {
//   res.send("Birds home page");
// });
// // define the about route
// router.get("/about", (req, res) => {
//   res.send("About birds");
// });

router.get("/", (req, res) => {
  res.send("Got a GET Request");
  //res.sendFile("../dummy.html", { root: __dirname });
});

router.post("/items", (req, res) => {
  res.send("Got a Post Request");
});

router.put("/items/:id", (req, res) => {
  res.send("Got a PUT Request");
});
router.delete("/items/:id", (req, res) => {
  res.send("Got a DELETE Request");
});

module.exports = router;
