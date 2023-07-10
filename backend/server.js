import express from "express";

import dotenv from "dotenv";

import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const port = process.env.PORT || 6000;

connectDB();

// let init  express

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

/** 
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
 */

app.use("/api/products", productRoutes);
//app.use(notFoundHandler);
//app.use(errorHandler);

app.use(notFound);

app.use(errorHandler);

app.listen(port, () => console.log(`listening on ${port}`));
