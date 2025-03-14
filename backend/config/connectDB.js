import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to the database successfully.`);
  } catch (error) {
    console.log(`Unable to connect to Database: ${error}`);
    throw error;
  }
};
