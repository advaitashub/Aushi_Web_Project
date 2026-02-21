const express =require("express");
const router =express.Router();
const bcrypt =require("bcrypt");
const jwt=require("jsonwebtoken");
const Admin =require("../models/Admin");

exports.loginAdmin =async (req,res)=>{
    const{email, password}=req.body;

    const admin=await Admin.findOne({ email});
    if(!admin) return res.status(400).json({message:"Admin not found"});

    const isMatch =await bcrypt.compare(password,admin.password);
    if(!isMatch) return res.status(400).json({message:"Wrong Password"});

    if(!admin.approved){
        return res.status(403).json({message:" Not approved yet"});
    }

    const token =jwt.sign({id: admin._id},process.env.JWT_SECRET
,{expiresIn:"1d"});

    res.json({token});
}

exports.registerAdmin = async (req, res) => {
  try {
    const{email,password,confirmPassword}=req.body;

    if(!email || !password || !confirmPassword) return res.status(400).json({message: "All fields are required."})

    const adminExist=await Admin.findOne({email});
    if(adminExist) return res.status(400).json({message:"Admin with this email already exists"});

    if(password.length<6) return res.status(400).json({message:"Please enter password of 6 or more characters "});

    if (password !== confirmPassword) return res.status(400).json({message:"Password and Confirm Password are different"});

    const hashedPassword = await bcrypt.hash(password,10);
    
    const newAdmin= new Admin({
        email,
        password:hashedPassword,
        approved:false
    })

    await newAdmin.save();

    res.status(201).json({
      message: "Registered successfully. Waiting for approval."
    });
    } catch (error) {
         console.error("REGISTER ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
}

exports.approveAdmin = async (req, res) => {
  try {
    const newAdmin = await Admin.findById(req.params.id);

    if (!newAdmin) {
      return res.status(404).json({ message: "User not found" });
    }

    newAdmin.approved = true;
    await newAdmin.save();

    res.json({ message: "Admin approved successfully" });

  } catch (error) {
    console.error("APPROVE ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};


exports.rejectAdmin = async (req, res) => {
  try {
    await Admin.findByIdAndDelete(req.params.id);
    res.json({ message: "Admin rejected and deleted" });
  } catch (error) {
    console.error("REJECT ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};


// Get all admins
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find().select("-password"); 
    // remove password field

    res.json(admins);
  } catch (error) {
    console.error("GET ADMINS ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};
