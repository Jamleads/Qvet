const passport = require("passport");
const GoogleStrategy = require("passport-google-oidc");
const User = require("../../models/User.js"); // Adjust the path to your User model
require('dotenv').config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRETE,
      callbackURL: process.env.callbackURL,
    },
    async function (issuer, profile, cb) {
      try {
        // Check if the user already exists in the database
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          // If user doesn't exist, create a new user
          user = new User({
            googleId: profile.id,
            displayName: profile.displayName,
            name: {
              familyName: profile.name.familyName,
              givenName: profile.name.givenName,
            },
            email: profile.emails[0].value,
          });

          await user.save();
        }

        return cb(null, user);
      } catch (err) {
        console.error("Error in Google Strategy callback:", err);
        return cb(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
