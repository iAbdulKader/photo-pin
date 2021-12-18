const router = require("express").Router();
const cloudinary = require("cloudinary").v2;
const Pin = require("../Model/Pin");

router.post("", async (req, res) => {
  console.log(req.body)
  try {
    const file = req.files.pin;
    cloudinary.config({ 
      cloud_name: 'gdmc', 
      api_key: '281925419787952', 
      api_secret: 'VCy1YXpyV379I8yqIJGPi40mS4g',
      //secure: true
    });
    cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
      const pin = new Pin({
        author: "ak",
        url: result.url,
        title: req.body.title,
        description: req.body.description,
        destination: req.body.destination,
        size: req.body.size || "lg"
      });
      let response = await pin.save()
      console.log(response)
      res.json(response)
    })
  } catch (e) {
    console.log(e)
    res.status(500).json(e)
  }
})

module.exports = router;