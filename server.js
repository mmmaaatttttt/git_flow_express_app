const express = require("express");

const PORT = 3001;
const app = express();

app.get("/", (req, res) => {
  return res.json({ ping: "pong" });
});

app.get("/random", (req, res) => {
  const random = Math.floor(Math.random() * 100);
  return res.json({ random });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
