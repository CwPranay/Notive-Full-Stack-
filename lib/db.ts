import mongoose from "mongoose";

const MongoDB_URL = process.env.MONGODB_URL as string;

if (!MongoDB_URL) {
  throw new Error("Please define the MONGODB_URL environment variable inside .env.local");
}

let isConnected = false;
const connectDB= async () => {

    if (isConnected) {
        return;
    }
    try{
        await  mongoose.connect(process.env.MONGODB_URL!)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });


    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}

export default connectDB;