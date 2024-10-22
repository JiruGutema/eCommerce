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

const userSchema = new Schema({
  username: {
    type: String,
    required: "username is required",
    unique: true,
  },
  password: {
    type: String,
    required: "password is required",
  },
});

// Simple password verification method (placeholder)
userSchema.methods.verifyPassword = function (password) {
  // Implement your password verification logic here
  return this.password === password; // Placeholder for direct comparison
};

const Product = mongoose.model("Product", productSchema);
const User = mongoose.model("User", userSchema);

export { Product, User };
