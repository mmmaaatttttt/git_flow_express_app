const express = require("express");
const authRouter = require("./routes/auth");

const PORT = 3001;
const app = express();

app.use("/auth", authRouter);

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

app.use((err, req, res, next) => {
  err.status = err.status || 500;
  err.message = err.message || "broken!";
  return res.status(err.status).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
