const express = require("express");
const app = express();
const productRouter = express.Router();
const orderRouter = express.Router();

// Products Router
productRouter.get("/", (req, res) => {
  res.send("Get All Products");
});

productRouter.get("/:productId", (req, res) => {
  res.send(`Get Product with ID: ${req.params.productId}`);
});

productRouter.post("/", (req, res) => {
  res.send("Create New Product");
});

// Orders Router
orderRouter.get("/", (req, res) => {
  res.send("Get All Orders");
});

orderRouter.get("/:orderId", (req, res) => {
  res.send(`Get Order with ID: ${req.params.orderId}`);
});

orderRouter.post("/", (req, res) => {
  res.send("Create New Order");
});

// Use routers with prefixes
app.use("/products", productRouter);
app.use("/orders", orderRouter);

module.exports = app;
