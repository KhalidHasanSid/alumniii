import mongoose from 'mongoose';

const connectToDatabase = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected to the database");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI); // Ensure this env variable is set
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Database connection failed:", err);
  }
};

export default connectToDatabase;
