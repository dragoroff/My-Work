const User = require("../models/user");
const bcrypt = require("bcrypt-nodejs");
const config = require('../config');
const jwt = require("jwt-simple");

const tokenForUser = user => {
  const timeStamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timeStamp}, config.secret)
}

exports.auth = (req, res, next) => {
  const email = req.body.email;
  let password = req.body.password;

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      next(err);
    }
    bcrypt.hash(password, salt, null, (err, hash) => {
      if (err) {
        next(err);
      }

      password = hash;
    });
  });

  User.findOne({ email: email })
    .then(user => {
      if (user) {
        return res.status(400).json({ email: "User already exists" });
      }

      const newUser = new User({
        email: email,
        password: password
      });

      newUser
        .save()
        .then(user => res.json({token: tokenForUser(user)}))
        .catch(err => next(err));
    })
    .catch(err => next(err));
};

exports.signin = (req, res) => {
  //We are getting user's data from passport that is in our "middleware" - /router/requireSignin
  //All we want is just to return token for authenticated user 
  res.send({ token: tokenForUser(req.user)})
}