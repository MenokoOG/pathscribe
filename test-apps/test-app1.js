const express = require("express");
const app = express();

// Middleware example
app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  next();
});

// Route with query parameters
app.get("/users", (req, res) => {
  const { page, limit } = req.query;
  res.send(`Get Users - Page: ${page}, Limit: ${limit}`);
});

// Route with path parameters
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Get User with ID: ${id}`);
});

// Create a new user
app.post("/users", (req, res) => {
  res.send("User Created");
});

// Update user details
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  res.send(`User with ID: ${id} Updated`);
});

// Delete a user
app.delete("/users/:id", (req, res) => {
  res.send(`User with ID: ${id} Deleted`);
});

module.exports = app;
