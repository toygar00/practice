const express = require("express");
const app = express();

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("ffs");
});

app.listen(PORT);
