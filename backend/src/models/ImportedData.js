import mongoose from "mongoose";

const ImportedDataSchema = new mongoose.Schema({
  sheetName: String,
  Name: String,
  Amount: Number,
  Date: Date,
  Verified: String,
});

const ImportedData = mongoose.model("ImportedData", ImportedDataSchema);
export default ImportedData;
