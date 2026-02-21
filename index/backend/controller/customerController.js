const express=require ("express");
const router= express.Router();
const Customer = require("../models/Customer"); // Model

// Controller function
exports.createCustomer = async (req, res) => {
  try {
    const { name, email, subject, message, contactNo } = req.body;

    if (!name || !email || !subject || !message || !contactNo) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (contactNo.length !== 10) {
      return res.status(400).json({ message: "Phone number must be 10 digits" });
    }

    const newCustomer = new Customer({
      name,
      email,
      subject,
      message,
      contactNo,
    });

    await newCustomer.save();

    res.status(201).json({ message: "Thank You! We'll contact you soon" });
  } catch (error) {
    console.error("Details ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};



// Get all customers (for admin dashboard)
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find().sort({ createdAt: -1 });
    res.json(customers);
  } catch (error) {
    console.error("GET CUSTOMERS ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};