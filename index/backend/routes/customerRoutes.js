const express = require("express");
const router = express.Router();
const { createCustomer,getAllCustomers } = require("../controller/customerController"); // import controller function

// POST request to create a customer
router.post("/", createCustomer);
router.get("/", getAllCustomers);     // Admin dashboard fetch



module.exports = router;
