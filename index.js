const express = require("express");
const app = express();
const cors = require("cors");

// Enable CORS
app.use(cors());

const PORT = process.env.PORT || 3000;

// ✅ Backend route for your frontend to call
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend API!" });
});

// Optional: Keep your root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`sample-expressjs app listening on port ${PORT}!`);
});
