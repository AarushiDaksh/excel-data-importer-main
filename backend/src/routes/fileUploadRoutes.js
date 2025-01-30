const express = require("express");
const multer = require("multer");
const xlsx = require("xlsx");
const path = require("path");
const router = express.Router();

// Set up multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Make sure you have an 'uploads' folder in your root directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage });

// Route to handle the file upload
router.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  // Process the uploaded Excel file
  try {
    const filePath = path.join(__dirname, "../uploads", req.file.filename);
    const workbook = xlsx.readFile(filePath);

    // Get sheet names and parse the first sheet (you can modify this logic if you need specific sheets)
    const sheetNames = workbook.SheetNames;
    const sheet = workbook.Sheets[sheetNames[0]]; // For demo, taking the first sheet
    const data = xlsx.utils.sheet_to_json(sheet);

    // Send back the preview of the data (you can adjust what data to send based on your needs)
    res.json({
      message: "File uploaded successfully",
      preview: data, // The parsed data from the first sheet
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error processing the file.");
  }
});

module.exports = router;
