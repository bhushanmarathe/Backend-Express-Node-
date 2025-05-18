require("dotenv").config({
  path: require("path").resolve(__dirname, "../../.env"),
});

const jwt = require("jsonwebtoken");

const payload = {
  userId: "12345", // or any other user-specific info
  email: "user@example.com",
};

const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
  expiresIn: process.env.ACCESS_TOKEN_EXPIRATION,
});

const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
  expiresIn: process.env.REFRESH_TOKEN_EXPIRATION,
});

console.log("Access Token:", accessToken);
console.log("Refresh Token:", refreshToken);
