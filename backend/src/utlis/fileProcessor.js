import xlsx from "xlsx";
import { validationRules } from "../config/validationConfig.js";

export const processExcelFile = (filePath) => {
  const workbook = xlsx.readFile(filePath);
  const sheets = workbook.SheetNames;
  let validData = [];
  let errors = [];

  sheets.forEach((sheet) => {
    const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet], { header: 1 });
    const headers = sheetData[0];

    sheetData.slice(1).forEach((row, rowIndex) => {
      let rowData = {};
      let rowErrors = [];
      
      headers.forEach((col, colIndex) => {
        rowData[col] = row[colIndex] || null;

        // Validation
        const rule = validationRules.default.rules[col];
        if (rule?.required && !row[colIndex]) {
          rowErrors.push(`${col} is required`);
        }
        if (rule?.min !== undefined && row[colIndex] < rule.min) {
          rowErrors.push(`${col} should be greater than ${rule.min}`);
        }
      });

      if (rowErrors.length > 0) {
        errors.push({ sheet, row: rowIndex + 1, errors: rowErrors });
      } else {
        validData.push({ sheet, ...rowData });
      }
    });
  });

  return { validData, errors };
};
