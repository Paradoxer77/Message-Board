var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi, Okay!",
    user: "Jack Prasad",
    date: new Date(),
  },
  {
    text: "Hello",
    user: "No",
    date: new Date(),
  },
  {
    text: "Imma end this man's whole career",
    user: "??",
    date: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages });
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.message,
    user: req.body.user,
    date: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
