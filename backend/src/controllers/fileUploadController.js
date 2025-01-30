import { processExcelFile } from "../utils/fileProcessor.js";
import ImportedData from "../models/ImportedData.js";

export const uploadFile = async (req, res) => {
  try {
    const { validData, errors } = processExcelFile(req.file.path);

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    await ImportedData.insertMany(validData);
    res.json({ message: "Data imported successfully!", importedCount: validData.length });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
