const mongoose = require("mongoose");
require("dotenv").config();

function conncetDB() {
  mongoose.connect(process.env.MONGODB_URI, {
   // useNewParser: true,
   //useCreateIndex: true,
    useUnifiedTopology: true
  //  useFindAndModify: true
  });
  const connection = mongoose.connection;
  
  connection.once('open', () => {
    console.log("Database Connected");
  });
};

module.exports = conncetDB;