const express = require("express");
const app = express();
const dotenv = require("dotenv");

const productRoutes = require("./routes/productRoute");

app.use(express.json());

dotenv.config();
const port = process.env.PORT;

const connectDB = require("./config/db");

//connect to database
connectDB();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", productRoutes);

app.listen(port, () => {
  console.log(`Product app listening on port ${port}`);
});
