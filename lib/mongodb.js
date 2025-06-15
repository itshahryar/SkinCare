// import mongoose from "mongoose";

// const connectMongoDB = async () => {
//   try {
//     if (mongoose.connections[0].readyState) return;
//     await mongoose.connect(process.env.MONGODB_URL);
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//   }
// };

// export default connectMongoDB;
import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  throw new Error("Please define the MONGODB_URL environment variable");
}

// Global cache to prevent multiple connections in development
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URL, {
      bufferCommands: false,
      connectTimeoutMS: 30000,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export { connect };
