import React from "react";
import "./styles/App.css"; // Importation du fichier CSS
import SignInForm from "./components/SignInForm";
import fitnessImage from "./assets/fitness.jpg";

function App() {
  return (
    <div className="app-container">
      <div className="image-section">
        <img src={fitnessImage} alt="Fitness" className="fitness-image" />
      </div>
      <div className="form-section">
        <SignInForm />
      </div>
    </div>
  );
}

export default App;



