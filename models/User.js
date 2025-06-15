// import mongoose from "mongoose";

// const UserSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   fullName: { type: String, required: true },
// }, { timestamps: true });

// export default mongoose.models.User || mongoose.model("User", UserSchema);

// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clerkUserId: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    name: String,
    imageUrl: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;

