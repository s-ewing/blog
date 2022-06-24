require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
const express = require("express");
const app = express();
const PORT = process.env.PORT;


app.use(express.json());
app.use("/api/blogposts", require("./api/blogposts"));
//Connect MongoDB
connectDB();




mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, console.log(`Server is running on port ${PORT}`));
});
