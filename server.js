const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.get("/api/message", (req, res) => {
  res.json({
    message: "Hello from ECS backend!",
    time: new Date().toISOString()
  });
});

app.get("/", (req, res) => {
  res.send("Backend is running successfully");
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
