/**
 * the root file
 */
const express = require("express");
require("dotenv").config();
const createError = require("http-errors");
const morgan = require("morgan");
const UserRouter = require("./routes/GoogleAuth.js/Auth");

const app = express();
const port = process.env.port || 3004;

//middlewares
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/user", UserRouter);
app.get("/", (req, res) => {
  res.send("hello");
});

// default error handler if error
app.use((req, res, next) => {
  // checks for errors and manages them properly
  next(createError.NotFound());
});
app.use((err, req, res, next) => {
  //middleware for error management
  req.status = err.status;
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

app.listen(port, () => {
  console.log(`app started at port ${port}`);
});
