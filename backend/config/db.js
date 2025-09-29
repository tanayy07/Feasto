import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connect("mongodb+srv://FoodDelivery:Pranjal%40123@cluster0.kcncheq.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0test");
    console.log("DB Connected to fooddelivery database");
  } catch (error) {
    console.log("DB Connection Error:", error);
  }
};
