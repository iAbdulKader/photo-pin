const router = require("express").Router();
const Pin = require("../Model/Pin");

router.post("", async (req, res) => {
  let pins = await Pin.find().sort({"createdAt": -1})
  res.json(pins)
})

module.exports = router;