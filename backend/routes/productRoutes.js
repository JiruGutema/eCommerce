import {
  getProducts,
  addProducts,
  deleteProduct,
  checkUser,
  registerUser,
} from "../controllers/productcontrollers.js";

const routes = (app) => {
  app.route("/products").get(getProducts).post(addProducts);
  app.route("/login").post(checkUser);
  app.route("/signup").post(registerUser);
  app.route("/products/:productId").delete(deleteProduct);
};

export default routes;
