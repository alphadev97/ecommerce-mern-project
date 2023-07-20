import express from "express";
import colors from "colors";

// Rest Object

const app = express();

// Rest API

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to our MERN STACK E-Commerce App",
  });
});

// Port

const PORT = 8080;

// App Listen

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgCyan.white);
});
