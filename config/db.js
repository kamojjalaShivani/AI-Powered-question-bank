require("dotenv").config(); 
const mongoose=require("mongoose");

console.log("MONGO_URI:", process.env.MONGO_URI); // Debugging line
const connectDB = async () => {
    try {
      if (!process.env.MONGO_URI) {
        throw new Error("MONGO_URI is not defined in .env file");
      }
  
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  
      console.log("MongoDB Connected Successfully");
    } catch (err) {
      console.error("MongoDB Connection Failed:", err.message);
     
    }
  };
  
  module.exports = connectDB;