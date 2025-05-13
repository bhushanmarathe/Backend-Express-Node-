const Product = require("../models/productModel");

//Business logic

const getProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();

    if (!allProducts || allProducts.length === 0) {
      res.json({
        message: "There is no product",
      });
    }

    //if products >=1
    res.status(200).json({
      success: true,
      prodcts: allProducts,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;

    const newProduct = new Product({ name, price, description, category });
    await newProduct.save();
    res.status(200).json({
      //   success: true,
      //   message: "Product added successfully",

      product: newProduct,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description, category } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        price,
        description,
        category,
      },
      { new: true }
    ); //this field is added to see the updated data iin the postman

    res.status(200).json({
      product: updatedProduct,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deleteProduct) {
      res.json({
        message: "Product not found, cannot delete",
      });
    }

    res.status(200).json({
      message: "Product deleted successfully",
      product: deletedProduct,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
