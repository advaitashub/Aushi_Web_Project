const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  addProduct,
  getProducts,
  deleteProduct,
  updateProduct
} = require("../controller/productController");

// STORAGE CONFIG
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// CREATE UPLOAD INSTANCE
const upload = multer({ storage: storage });

router.post("/", upload.single("image"), addProduct);
router.get("/", getProducts);
router.delete("/:id", deleteProduct);
router.put("/:id",updateProduct);


module.exports = router;