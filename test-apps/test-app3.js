const express = require("express");
const app = express();

// Asynchronous route handler with try-catch
app.get("/data", async (req, res, next) => {
  try {
    const data = await fetchData(); // Simulate async operation
    res.json(data);
  } catch (error) {
    next(error); // Pass error to error handler
  }
});

// Simulate data fetching
async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ name: "Sample Data" }), 1000);
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

module.exports = app;
