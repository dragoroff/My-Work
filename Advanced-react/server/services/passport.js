const passport = require("passport");
const config = require("../config");
const User = require("../models/user");
const Strategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const localPassport = require("passport-local");
const bcrypt = require("bcrypt-nodejs");

const localStrategy = new localPassport(
  { usernameField: "email" },
  (email, password, done) => {
    User.findOne({ email: email })
      .then(user => {
        if (!user) {
          done(null, false);
        } else {
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
              return done(err);
            }
            if (!isMatch) {
              return done(null, false);
            } else {
              return done(null, user);
            }
          });
        }
      })
      .catch(err => done(err));
  }
);

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: config.secret
};

const strategy = new Strategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub, (err, user) => {
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
});

passport.use(strategy);
passport.use(localStrategy);
