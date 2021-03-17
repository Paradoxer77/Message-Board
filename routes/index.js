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
router.get("/", function (req, res, next) {
  res.render("index", { title: "Message Board", messages });
});

module.exports = router;