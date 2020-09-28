var express = require("express");
var router = express.Router();

// GET result of the algorithm
router.post("/", function(req, res) {
  const { body: { password } } = req;

  //temporary response with the received password
  res.json(password);
});

module.exports = router;
