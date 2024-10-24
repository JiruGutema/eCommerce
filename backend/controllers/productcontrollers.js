import { Product, User } from "../models/productModel.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (e) {
    res
      .status(500)
      .json({ message: "Server error while getting products", error: e });
  }
};

export const checkUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    // Check if user exists and verify the password
    if (!user || !user.verifyPassword(password)) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.json({ message: "Login successful", user });
  } catch (e) {
    res.status(500).json({ message: "Server error during login", error: e });
  }
};

export const registerUser = async (req, res) => {
  const newUser = new User(req.body);
  console.log(req.body.password);
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (e) {
    res
      .status(500)
      .json({ message: "Server error while registering user", error: e });
  }
};

export const addProducts = async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const product = await newProduct.save();
    res.status(201).json(product);
  } catch (e) {
    res
      .status(500)
      .json({ message: "Server error while adding product", error: e });
  }
};

export const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    await Product.deleteOne({ _id: productId });
    res.json({ message: "Product deleted" });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Error occurred while deleting product", error: e });
  }
};
