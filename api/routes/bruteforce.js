var express = require("express");
var router = express.Router();

// GET result of the algorithm
router.post("/", function(req, res) {
  const { body: { password } } = req;
  let allowedSymbols = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890!@#$%^&*()_+[]\\{}|/,.<>?";
  allowedSymbols = [...new Set(allowedSymbols.split(""))];

  function createStrings(obj) {
    let {length, string, iteration} = obj;
    iteration++;
  
    let str = string;
    for (let i = 0; i < allowedSymbols.length; i++) {
      str = str + allowedSymbols[i];
      arr.push(str);
      if (iteration < length) {
        const obj = {
          length,
          string: str,
          iteration,
        };
        createStrings(obj);
      }
      console.log(i, str, iteration);
      str = string;
    }
    return 0;
  }
  
  const startObj = {
    length: 3,
    string: "",
    iteration: 0,
  }

  const start = new Date();
  createStrings(startObj);
  const end = new Date();
  const seconds = (end.getTime() - start.getTime()) / 1000

  res.json(seconds);
});

module.exports = router;
