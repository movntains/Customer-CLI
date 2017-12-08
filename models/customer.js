const mongoose = require('mongoose');

// Customer Schema
const customerSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  phoneNumber: { type: String },
  email: { type: String }
});

// Define and export
module.exports = mongoose.model('Customer', customerSchema);