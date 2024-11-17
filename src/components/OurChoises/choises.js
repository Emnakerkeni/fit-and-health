import React, { useState, useEffect } from "react";
import "./choises.css";
import skinCareImage from './skincare.jpg';
import nutritionImage from './nutrition.jpg';
import fitnessImage from './fit.jpg';

function Choices() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Retrieve data from localStorage when the component mounts (optional)
  useEffect(() => {
    const savedCategory = localStorage.getItem('userChoice');
    if (savedCategory) {
      setSelectedCategory(JSON.parse(savedCategory)); // Restore the saved choice
    }
  }, []);

  return (
    <div className="app">
      <header className="header">
       
      </header>

      <main className="main-content">
        <h1>What we can help you?</h1>
        <div className="card-container">
          <div
            className="card"
            role="button"
          >
            <img src={skinCareImage} alt="Skin Care" />
            <div className="overlay">Skin Care</div>
          </div>
          <div
            className="card"
            role="button"
          >
            <img src={nutritionImage} alt="Nutrition" />
            <div className="overlay">Nutrition</div>
          </div>
          <div
            className="card"
            role="button"
          >
            <img src={fitnessImage} alt="Fitness" />
            <div className="overlay">Fitness</div>
          </div>
        </div>

        <div>
          {selectedCategory && <p>You have selected: {selectedCategory}</p>}
        </div>
      </main>

      <footer className="footer">
        <p>Designed by Your Name | Powered by Figma</p>
        <div className="social-icons">
          <a href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
          <a href="#instagram">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default Choices;
