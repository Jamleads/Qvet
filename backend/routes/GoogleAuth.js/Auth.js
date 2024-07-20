// a route extension to hanndle googleAuth

const express = require("express");
const router = express.Router();
var passport = require("passport");
const User = require('../../models/User.js');
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
// Callback route where Google will redirect the user after authentication
router.get(
  "/auth/confirm",
  passport.authenticate("google", {
    failureRedirect: "/auth/login",
    successRedirect: "/auth/dashboard",
  }),
  (err, req, res, next) => {
    // Custom error handler
    if (err) {
      console.error("Error during authentication:", err);
      res.status(500).send("Internal Server Error");
    }
  }
);


router.get("/auth/login", (req, res) => {
  res.send("please login ");
});



router.get("/auth/dashboard", async (req, res) => {
  if (req.isAuthenticated()) {
    try {
      // Fetch user details from the database
      const user = await User.findById(req.user.id);
      if (user) {
        res.send(`
          <h1>Welcome, ${user.displayName}</h1>
          <p>Email: ${user.email}</p>
          <p>Name: ${user.name.givenName} ${user.name.familyName}</p>
        `);
      } else {
        res.send("User not found");
      }
    } catch (err) {
      console.error("Error fetching user details:", err);
      res.status(500).send("Error fetching user details");
    }
  } else {
    res.redirect("/auth/login");
  }
});

// PUT request to update user profile
router.put("/auth/profile", async (req, res) => {
  if (req.isAuthenticated()) {
    try {
      // Fetch user details from the database
      const user = await User.findById(req.user.id);
      if (user) {
        // Update user details
        const { displayName, familyName, givenName, email } = req.body;
        if (displayName) user.displayName = displayName;
        if (familyName) user.name.familyName = familyName;
        if (givenName) user.name.givenName = givenName;
        if (email) user.email = email;

        await user.save();
        res.send("User profile updated successfully");
      } else {
        res.send("User not found");
      }
    } catch (err) {
      console.error("Error updating user details:", err);
      res.status(500).send("Error updating user details");
    }
  } else {
    res.status(401).send("Unauthorized");
  }
});

module.exports = router;
