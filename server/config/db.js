import mongoose from "mongoose";

const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://wwwarpan01:rft5AcuNOIHiPk4o@cluster0.sgry5az.mongodb.net/";
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to DB successfully...");
  } catch (error) {
    console.log("Connection Failed", error);
  }
};

export default connectDB;
