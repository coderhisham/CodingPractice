const express = require("express");
const app = express();

const rootMiddleware = (req, res, next) => {
  console.log("Root Middleware");
  next();
};

app.use((req, res, next) => {
  console.log("First Middleware");
  next();
});
app.use((req, res, next) => {
  console.log("Second Middleware");
  next();
});

app.get("/", rootMiddleware, (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About Us");
});

app.use("*", (req, res) => {
  res.send("404 Not Found");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
