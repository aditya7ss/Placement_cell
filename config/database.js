const mongoose = require("mongoose");
require("dotenv").config();
const connectDb = async() => {
  try{
  await mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
   console.log("DB CONNECTED SUCCESSFULLY")
  }
    catch(err) {
      console.log("DB CONNECTION FAILED");
      console.log(err);
      process.exit(1);
      }
    
};
 
module.exports= connectDb;

