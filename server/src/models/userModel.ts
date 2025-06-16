import mongoose, { Document, Model, Schema } from "mongoose";

// 1. Define an interface for the user document
export interface IUser extends Document {
  clerkID: string;
  email: string;
  photo: string;
  firstName?: string;
  lastName?: string;
  creditBalance: number;
}

// 2. Create the schema
const userSchema: Schema<IUser> = new mongoose.Schema({
  clerkID: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  photo: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  creditBalance: { type: Number, default: 5 },
});

// 3. Create the model
const userModel: Model<IUser> = mongoose.models.users || mongoose.model<IUser>("users", userSchema);

export default userModel;
