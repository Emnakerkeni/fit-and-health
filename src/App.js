// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Router components
import SignUpPage from './components/signUp/SignUpPage'; 
import Choices from './components/OurChoises/choises'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define Routes */}
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/choices" element={<Choices />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
