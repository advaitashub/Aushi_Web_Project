const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message:String,
  contactNo: String
});

module.exports = mongoose.model("Customer", customerSchema);
