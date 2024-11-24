import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpPage from './components/SignUpPage';
import Choices from './components/Choices';
import SignInForm from './components/SignInForm';
import LifestyleForm from './components/LifestyleForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/choices" element={<Choices />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/lifestyle" element={<LifestyleForm />} />
      </Routes>
    </Router>
  );
}

export default App;
