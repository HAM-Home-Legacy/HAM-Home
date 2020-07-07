const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const routes = require("./routes");

app.use(express.static("client/dist"));

app.use("/api", routes.userRoutes);

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/dist/index.html");
});

app.listen(PORT, () => {
  console.log("App is listetning on PORT", PORT);
});
