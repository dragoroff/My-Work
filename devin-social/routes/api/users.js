const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const keys = require("../../config/keys");

//Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const isEmpty = require("../../validation/is-empty");

// @route   Get api/users/test
// @desc    Tests post route
// @access  Public

router.get("/test", (req, res) => {
  res.json({ msg: "Users works" });
});

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json({ errors });
    } else {
      let avatar;

      if (!isEmpty(req.body.avatar)) {
        avatar = req.body.avatar;
      } else {
        avatar = gravatar.url(req.body.email, {
          s: "200", //Size
          r: "pg", // Rating
          d: "mm" // default
        });
      }

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;

          //newUser.save() - Promise!!!
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   Get api/users/login
// @desc    Login User / Returning JWT
// @access  Public

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    // We are getting promise that return true/false
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched

        const payload = { id: user.id, name: user.name, avatar: user.avatar }; // Create JWT payload
        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        ); //imported from folder config
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   Get api/users/avatar
// @desc    Change avatar of current user
// @access  Private

router.post("/avatar", (req, res) => {
  const userData = {};

  if (req.body.avatar) userData.avatar = req.body.avatar;
  if (req.body.id) userData.id = req.body.id;
  if (req.body.name) userData.name = req.body.name;

  User.findOne({ _id: req.body.id })
    .then(user => {
      if (user) {
        User.findOneAndUpdate(
          { _id: req.body.id },
          { $set: userData },
          { new: true }
        ).then(user => res.json(user));
      } else {
        res.status(404).json("User not found");
      }
    })
    .catch(err => response.status(404).json({ error: err }));
});

// @route   Get api/users/current
// @desc    Return current user
// @access  Private

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
