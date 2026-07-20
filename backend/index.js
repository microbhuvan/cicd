const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.get("/api/message", (req, res) => {
  console.log("message from backend");
  return res.status(200).json({ message: "yes from backend" });
});

app.listen(3000, () => {
  console.log("server started");
});
