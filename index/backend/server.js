const express=require("express");
const mongoose=require("mongoose");
require("dotenv").config();
const cors = require("cors");
const adminRoutes=require("./routes/adminRoutes");
const path=require("path");



const app = express();
app.use(cors());


app.use(express.json());

const productRoutes = require("./routes/productRoutes");
const customerRoutes=require("./routes/customerRoutes");


app.use("/api/admin",adminRoutes);
app.use("/api/customer",customerRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));app.use("/api/products", productRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(5000, ()=>console.log("Server running"))