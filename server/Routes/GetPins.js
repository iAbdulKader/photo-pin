const router = require("express").Router();
const Pin = require("../Model/Pin");

router.post("", async (req, res) => {
  let pins = await Pin.find()
  res.json(pins)
})

module.exports = router;