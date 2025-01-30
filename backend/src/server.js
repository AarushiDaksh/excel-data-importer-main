// Import necessary modules
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db"); // Import the database connection function
const fileUploadRoutes = require("./routes/fileUploadRoutes"); // Import file upload routes

// Load environment variables from .env file
dotenv.config();

// Establish connection to MongoDB database
connectDB();

// Create an instance of Express app
const app = express();

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS) to allow requests from different origins
app.use(express.json()); // Parse incoming JSON requests and place the result in req.body

// Set up the routes
app.use("/api/upload", fileUploadRoutes); // Define route to handle file uploads

// Error handling middleware for unexpected errors
app.use((err, req, res, next) => {
  console.error("Unexpected error:", err);
  res.status(500).json({
    message: "An unexpected error occurred. Please try again later.",
    error: err.message,
  });
});

// Set the port from environment variable or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
