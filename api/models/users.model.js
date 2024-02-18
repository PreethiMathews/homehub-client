import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: Strign,
      required: true,
      unique: true,
    },
    email: {
      type: Strign,
      required: true,
      unique: true,
    },
    password: {
      type: Strign,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model(User, userSchema);
export default User;
