const { Router } = require("express");
const {
  newProduct,
  getAllProducts,
} = require("../controllers/productController");
const { authenticate, isAdmin } = require("../utils/authentication");

const productRouter = Router();

productRouter.post("/create-product", authenticate, isAdmin, newProduct);
productRouter.get("/find-products", getAllProducts);

module.exports = productRouter;
