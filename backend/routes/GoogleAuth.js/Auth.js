// a route extension to hanndle googleAuth

const express = require("express");
const createHttpError = require("http-errors");
const router = express.Router();

router.post("/Auth", (req, res, next) => {
  try {
    //if there is an error in the code throw the error name
   //eg throw createHttpError.Unauthorized();
    res.send({
      status: 200,
      message: "user authenticated",
    });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
