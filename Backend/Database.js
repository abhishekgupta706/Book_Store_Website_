import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const  connectDB = async () => {
  const URI = process.env.MONGO_URL;
   try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); 
  }
};

export default connectDB;
