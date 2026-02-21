const Product = require("../models/Product");

// Add product
exports.addProduct = async (req, res) => {
    try {
        const { name, price, description } = req.body;

        if (!req.file) {
            return res.status(400).json({ message: "Image is required" });
        }

        const newProduct = new Product({
            name,
            price,
            description,
            image:`uploads/${req.file.filename}`  // THIS IS IMPORTANT
        });

        await newProduct.save();

        res.status(201).json({ message: "Product added successfully" });

    } catch (error) {
        console.error("ADD PRODUCT ERROR:", error);
        res.status(500).json({ message: "Server error" });
    }
};


// Get all products
exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};


// Delete product
exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
};

// UPDATE product
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await Product.findByIdAndUpdate(id, req.body, { new: true });

    res.json({ message: "Product updated" });
  } catch (error) {
    console.error("UPDATE ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};