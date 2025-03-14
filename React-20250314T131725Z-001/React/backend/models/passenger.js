const mongoose = require("mongoose");

const PassengerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  file: { type: String }, // File path
});

module.exports = mongoose.model("Passenger", PassengerSchema);
