const productModel = require("../models/productModel");
const cloudinary = require("../utils/cloudinary");

const newProduct = async (req, res) => {
  try {
    const {
      productName,
      description,
      price,
      category,
      brand,
      quantity,
      color,
    } = req.body;
    const newProduct = await productModel.create({
      productName,
      description,
      price,
      category,
      brand,
      quantity,
      color,
    });
    if (req.files) {
      let images = [];
      if (req.files.images.length > 1) {
        for (let index = 0; index < req.files.images.length; index++) {
          const result = await cloudinary.uploader.upload(
            req.files.images[index].tempFilePath
          );
          images.push(result.secure_url);
        }
      } else {
        const result = await cloudinary.uploader.upload(
          req.files.images.tempFilePath
        );
        images.push(result.secure_url);
      }
      newProduct.images = images;
      await newProduct.save();
    }
    const product = await productModel.findById(newProduct._id);
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { newProduct };
