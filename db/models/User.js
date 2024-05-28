import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  creationDate: { type: Date, default: new Date() },
  name: { type: String, required: true },
  email: { type: String, required: true },
  image: String,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
