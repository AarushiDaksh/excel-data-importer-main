import React from "react";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white p-6">
        <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
        <ul>
          <li className="mb-4 hover:bg-blue-700 p-2 rounded cursor-pointer">Home</li>
          <li className="mb-4 hover:bg-blue-700 p-2 rounded cursor-pointer">Upload</li>
          <li className="mb-4 hover:bg-blue-700 p-2 rounded cursor-pointer">Reports</li>
          <li className="mb-4 hover:bg-blue-700 p-2 rounded cursor-pointer">Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-semibold mb-6">Welcome to the Dashboard</h1>
        <Home />
      </div>
    </div>
  );
};

export default App;
