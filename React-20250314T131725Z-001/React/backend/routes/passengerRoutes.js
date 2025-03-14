const express = require("express");
const router = express.Router();
const Passenger = require("./models/Passenger");
const upload = require("../middleware/upload");

// Create Passenger with File Upload
router.post("/", upload.single("file"), async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const filePath = req.file ? req.file.path : null;

    const newPassenger = new Passenger({
      name,
      email,
      phone,
      file: filePath,
    });

    await newPassenger.save();
    res.status(201).json({ message: "Passenger created successfully", data: newPassenger });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Retrieve All Passengers
router.get("/", async (req, res) => {
  try {
    const passengers = await Passenger.find();
    res.status(200).json(passengers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
