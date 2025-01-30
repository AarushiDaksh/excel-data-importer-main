import React from "react";

const DataTable: React.FC<{ data: any[] }> = ({ data }) => {
  return (
    <table className="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          {["Name", "Amount", "Date", "Verified"].map((col) => (
            <th key={col} className="border p-2">{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="border">
            <td className="p-2">{row.Name}</td>
            <td className="p-2">{row.Amount.toLocaleString("en-IN")}</td>
            <td className="p-2">{new Date(row.Date).toLocaleDateString("en-GB")}</td>
            <td className="p-2">{row.Verified}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
