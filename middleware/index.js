const express = require("express");
const app = express();

const port = 3000;

//loading middleware into the app
// app.use(express.json());

// //middleware-> logging, auth, validation

// //creating of middleware
// const loggingMiddleware = function (req, res, next) {
//   console.log("Logging kar raha hu");
//   next();
// };

// //loading middleware into app
// app.use(loggingMiddleware);

// const authMiddleware = function (req, res, next) {
//   console.log("Auth kar raha hu");
//   next();
// };

// app.use(authMiddleware);

// const validationMiddleware = function (req, res, next) {
//   console.log("validate kar raha hu");
//   next();
// };

// app.use(validationMiddleware);

// app.get("/", (req, res) => {
//   console.log(req.body);
//   console.log("Mai router handler hu");

//   res.send("Hello World");
// });

const route = require("./routes/route");

app.use("/api", route);

app.listen(port, () => {
  console.log(`App chalu zali ahe on port {3000}`);
});
