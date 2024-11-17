// App.js
import React from 'react';
import SignUpPage from './components/signUp/SignUpPage'; // Adjust path based on your file structure
import './App.css'; // Optional: Add global styles
import Choices from './components/OurChoises/choises'; // Capitalize Choices

function App() {
  return (
    <div className="App">
      <SignUpPage />
      <choices />
  
    </div>
  );
}

export default App;
