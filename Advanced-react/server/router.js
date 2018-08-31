const Authentication = require("./controllers/authentication");
const passport = require("passport");
const passportService = require("./services/passport");

const authorization = passport.authenticate("jwt", { session: false });
const requireSignIn = passport.authenticate("local", { session: false })

module.exports = app => {
  app.get("/", authorization, (req, res) => {
    res.send({ hi: "there" });
  });

  app.post('/signin', requireSignIn, Authentication.signin)

  app.post("/signup", Authentication.auth);
};
