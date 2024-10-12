import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema({
  sku: {
    type: Number,
    required: "sku is required",
    unique: true,
  },
  name: {
    type: String,
    required: "name is required",
  },
  description: {
    type: String,
    required: "description is required",
  },
  price: {
    type: Number,
    required: "price is required",
  },
  imageUrl: {
    type: String,
    required: "imageUrl is required",
    unique: true,
  },
  alt: {
    type: String,
    required: "alt is required",
  },
});
export default mongoose.model("Product", productSchema);
