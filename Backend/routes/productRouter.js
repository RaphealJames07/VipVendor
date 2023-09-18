const { Router } = require("express");
const { newProduct } = require("../controllers/productController");
const { authenticate, isAdmin } = require("../utils/authentication");

const productRouter = Router();

productRouter.post("/create-product", authenticate, isAdmin, newProduct);

module.exports = productRouter;
