import mongoose from "mongoose";

export interface User extends mongoose.Document {
  _id: string;
  name: string;
  email: string;
  password: string;
}

const UserSchema = new mongoose.Schema<User>({
  name: {
    type: String,
    required: [true, "Please enter name of the user."],
    maxlength: [50, "Name cannot be more than 50 characters"],
  },
});

export default mongoose.models.User || mongoose.model<User>("User", UserSchema);
