const express = require("express");
const cors = require("cors");
const expressFileupload = require("express-fileupload");

const app = express();

// MiddleWares
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(expressFileupload({
  useTempFiles: true
}))

// Routes 
app.use("/upload", require("./Routes/Upload"));
app.use("/getpins", require("./Routes/GetPins"));

// DB connection
const connectDB = require("./Configs/db");
connectDB();

// Port 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})