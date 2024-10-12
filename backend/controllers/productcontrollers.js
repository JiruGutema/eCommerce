import Product from "../models/productModel.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (e) {
    res
      .status(500)
      .json({ message: "server side error while getting products", error: e });
  }
};

export const addProducts = async (req, res) => {
  let newProduct = new Product(req.body);

  console.log(newProduct);
  try {
    const product = await newProduct.save();
    res.json(product);
  } catch (e) {
    res
      .status(500)
      .json({ message: "server error while adding product", error: e });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.deleteOne({ _id: req.params.ProductId });
    res.json({ message: "product deleted" });
  } catch (e) {
    res
      .status(500)
      .json({ message: "error occured while deleting product", error: e });
  }
};
