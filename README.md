# excel-data-importer-main
 This web application is designed to simplify the process of uploading and validating Excel files for data importation. Built with React on the frontend and Node.js with Express on the backend, it provides an intuitive user interface and efficient data handling. Key features include:

File Upload and Validation: Users can upload .xlsx files with drag-and-drop support. The backend processes and validates the file for errors, ensuring that all required columns and valid data are present.
Data Preview: After a successful upload, the user can preview the data in a table format. The data is paginated and allows sorting. Dates are formatted in the DD-MM-YYYY format, and numeric values are displayed in the Indian number format.
Error Handling: If the file contains any errors, such as missing or invalid data, these errors are shown in a modal, detailing the issue and affected rows.
Data Import: Once validated, the user can import the data directly to the backend, with invalid rows being skipped. A success message is displayed after the import is complete.
Backend: The backend is powered by Node.js and Express, handling file processing with xlsx and interacting with a MongoDB database for data storage. The validation logic is modular and can be extended for future use cases.
The application also features a clean, responsive design powered by Tailwind CSS, offering a modern UI for users to easily interact with the file upload and data import process.

This project demonstrates my skills in full-stack web development, including building a user-friendly frontend with React and handling backend logic for file uploads and database interactions