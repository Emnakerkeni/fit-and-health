import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import LifestyleForm from "./components/LifestyleForm";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/lifestyle" element={<LifestyleForm />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
