const express = require("express");
const authRouter = require("./routes/auth");

const PORT = 3001;
const app = express();

app.use("/auth", authRouter);

app.get("/", (req, res) => {
  return res.json({ status: "ok" });
});

app.use((err, req, res, next) => {
  err.status = err.status || 500;
  err.message = err.message || "broken!";
  return res.status(err.status).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
