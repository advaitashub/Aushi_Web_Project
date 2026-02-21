const express =require("express");
const router =express.Router();
const {loginAdmin, registerAdmin, approveAdmin, getAllAdmins, rejectAdmin}=require("../controller/adminController");
const verifyToken = require("../middleware/verifyToken");




router.post("/login",loginAdmin);
router.post("/register",registerAdmin);
router.put("/approve/:id", verifyToken, approveAdmin);
router.get("/", getAllAdmins);
router.delete("/reject/:id", rejectAdmin);


module.exports = router;