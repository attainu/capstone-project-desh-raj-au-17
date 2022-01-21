const router = require("express").Router();

router.get("/user", (req, res) => {
  res.send(`welcom to home page`);
});

module.exports = router;
