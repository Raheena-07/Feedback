import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavbarTop from "./components/NavbarTop";
import Dashboard from "./components/Dashboard";
import AddFeedback from "./components/AddFeedback";
import EditFeedback from "./components/EditFeedback";

import "./App.css";

function App() {
  return (
    <Router>
      <NavbarTop />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add" element={<AddFeedback />} />
          <Route path="/edit/:id" element={<EditFeedback />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
