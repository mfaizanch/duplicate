const express = require("express");

const path = require("path");
const bodyParser = require("body-parser");
const knitRoutes = require("./src/knit/routes");
const app = express();

const port = process.env.PORT || 3000;

app.post("/form", (req) => {
  console.log("hello from post listener");
  console.log(req.body);
});

app.get("/", function (_req, res) {
  console.log("hello im there");
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.use("/api/v1/knit", knitRoutes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
