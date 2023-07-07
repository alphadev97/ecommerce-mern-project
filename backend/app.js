const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");

app.use(express.json());

// Route Imports

const product = require("./routes/productRoute");
const user = require("./routes/userRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
