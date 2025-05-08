const express = require("express");
const router = express.Router();

//middlewares

const auth = function (req, res, next) {
  console.log("Inside auth middleware");

  req.user = { userID: 1, role: "admin" };

  if (req.user) {
    //if a valid user is there in the req, then proceed to next middleware
    next();
  } else {
    //not a valid user
    res.json({
      success: false,
      message: "not a valid user",
    });
  }
};

const isStudent = function (req, res, next) {
  console.log("I am inside student wala middleware");
  if (req.user.role === "student") {
    next();
  } else {
    res.json({
      success: false,
      message: "Access denied, this route is only for students",
    });
  }
};

const isAdmin = function (req, res, next) {
  console.log("I am inside admin wala middleware");

  if (req.user.role === "admin") {
    next();
  } else {
    res.json({
      success: false,
      message: "Access denied, this route is only for admin",
    });
  }
};

//routes
router.get("/student", auth, isStudent, (req, res) => {
  console.log("I am inside student wala route");

  res.send("Student specific page");
});

router.get("/admin", auth, isAdmin, (req, res) => {
  console.log("I am inside admin wala route");

  res.send("Admin specific page");
});

// define the home page route
router.get("/", (req, res) => {
  res.send("Birds home page");
});
// define the about route
router.get("/about", (req, res) => {
  res.send("About birds");
});

module.exports = router;
