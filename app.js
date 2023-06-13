const express = require("express");
const app = express();

const data = require("./data.json");

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.get("/server", (req, res) => {
  res.send(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
