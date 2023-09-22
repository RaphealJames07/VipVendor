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

const getAllProducts = async (req, res) => {
  try {
    //  array of allowed fields
    const allowedFields = ["productName", "brand", "category"];

    //  object with only the allowed fields from the query
    const queryObj = {};
    for (const field of allowedFields) {
      if (req.query[field]) {
        queryObj[field] = req.query[field];
      }
    }
    let query = productModel.find(queryObj);
    // Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }
    // Limiting the fields
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }
    // Pagination
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    if (req.query.page && req.query.limit) {
      query = query.skip(parseInt(skip)).limit(parseInt(limit));
      const productCount = await productModel.countDocuments(queryObj);
      if (skip >= productCount) {
        return res.status(404).json({
          message: "This page does not exist",
        });
      }
    }
    const allProducts = await query;
    res.status(200).json({
      allProducts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { newProduct, getAllProducts };
