const express = require("express");
const app = express();

app.set("view engine", "hbs");

app.use(require("./routes/index"));

app.listen("3000", (req, res) => {
  console.log("Listening on port 3000");
});