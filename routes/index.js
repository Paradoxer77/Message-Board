const express = require("express");
const router = express.Router();
const messages = [
  {
    text: "Hi There",
    user: "Amanda",
    added: new Date(),
  },
  {
    text: "Hello World",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Message Board", messages });
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", (req, res, next) => {
  let { userMessage, userName } = req.body;
  messages.push({ text: userMessage, user: userName, added: new Date() });
  res.redirect("/");
});

module.exports = router;
