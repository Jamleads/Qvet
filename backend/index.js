const express = require("express");
const session = require("express-session");
require("dotenv").config();
const createError = require("http-errors");
const morgan = require("morgan");
const AuthRouter = require("./routes/GoogleAuth.js/Auth.js");
const mongoose = require("mongoose");
const passport = require("passport");
require("./routes/GoogleAuth.js/Oauth");

const app = express();
const port = process.env.port || 3004;
const db_url = process.env.db_url;

// Middlewares
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure session middleware
app.use(
  session({
    secret: "your-secret-key", // Replace with a strong secret key
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // Set to true if you are using HTTPS
  })
);

// Initialize Passport and restore authentication state, if any, from the session
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/user", AuthRouter);

app.get("/", (req, res) => {
  res.send("welcome to Qvetapp");
});

// Default error handler if error
app.use((req, res, next) => {
  // Checks for errors and manages them properly
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  // Middleware for error management
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

app.listen(port, () => {
  mongoose
    .connect(db_url)
    .then(() => {
      console.log(`app started at port ${port}`);
      console.log("connected to database");
    })
    .catch((error) => {
      console.log("error connecting to database: " + error.message);
    });
});
