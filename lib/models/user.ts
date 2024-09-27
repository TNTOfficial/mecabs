import mongoose from "mongoose";

export interface Users extends mongoose.Document {
    name: string;
    email: string;
    password: string;
    role: string;
    phone: string;
    provider: string;
  }