import {
  getProducts,
  addProducts,
  deleteProduct,
} from "../controllers/productcontrollers.js";

const routes = (app) => {
  app.route("/products").get(getProducts).post(addProducts);

  app.route("/products/:productId").delete(deleteProduct);
};

export default routes;
