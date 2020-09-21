var express = require("express");
var router = express.Router();

// GET result of the algorithm
router.post("/", function(req, res) {
  res.json([
    { id: 1, username: "somebody" },
    { id: 2, username: "somebody_else" },
    { id: 3, username: "illia" },
  ]);
});

module.exports = router;
