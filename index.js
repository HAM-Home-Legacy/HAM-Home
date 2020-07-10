const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const routes = require("./routes");
const bodyParser = require("body-parser");
require("dotenv").config();

const fs = require("fs");
const path = require("path");
const multer = require("multer");
const Image = require("./models/image");

// Connection to DB
const uri = process.env.URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected");
});

app.use(express.static("client/dist"));
app.use(bodyParser.json());

//users Route
app.use("/api/users", routes.userRoutes);

//post Route
app.use("/api/posts", routes.postRoutes);

//image Route
app.use("/api/image", routes.imageRoutes);

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/dist/index.html");
});

app.listen(PORT, () => {
  console.log("App is listetning on PORT", PORT);
});
