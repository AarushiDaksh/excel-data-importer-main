import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import fileUploadRoutes from "./routes/fileUploadRoutes.js";
import dotenv from "dotenv";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/upload", fileUploadRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
