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

app.get("/random/:min/:max", (req, res) => {
  const numMin = Number(req.params.min);
  const numMax = Number(req.params.max);
  const randomBetweenMinAndMax = Math.floor(numMin + Math.random() * (numMax - numMin));
  return res.json({ random: randomBetweenMinAndMax });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
