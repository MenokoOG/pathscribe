const express = require("express");
const app = express();

app.get("/users", (req, res) => res.send("Get Users"));
app.post("/users", (req, res) => res.send("Create User"));
app.delete("/users/:id", (req, res) => res.send("Delete User"));

app.listen(3000, () => console.log("Server running on port 3000"));
