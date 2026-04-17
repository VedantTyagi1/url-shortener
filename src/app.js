const express = require("express");
const mongoose = require("mongoose");
const urlRoutes = require("./routes/urlRoutes");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/", urlRoutes);

module.exports = app;