import mongoose, { mongo } from "mongoose";

const orderSchema = new mongoose.Schema({});

export default mongoose.model("Order", orderSchema);
