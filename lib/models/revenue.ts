import mongoose from "mongoose";

export interface Revenue extends mongoose.Document {
    month: string;
    revenue: number;
  }

  const RevenueSchema = new mongoose.Schema<Revenue>({
    month: {
      type: String,
      required: [true, "Please enter month for revenue."],
      maxlength: [10, "Name cannot be more than 60 characters"],
    },
    revenue: {
      type: Number,
      required: [true, "Please enter  revenue."],
    },
  });
  
  export default mongoose.models.Revenue || mongoose.model<Revenue>("Revenue", RevenueSchema);