import React from 'react';
import '../styles/Choices.css';

// Importation des images
import fitImage from '../assets/fit.jpg';
import skincareImage from '../assets/skincare.jpg';
import nutritionImage from '../assets/nutrition.jpg';

function Choices() {
  return (
    <div className="choices">
      <h2>Choose a Category</h2>
      <div className="categories">
        <div className="category">
          <img src={fitImage} alt="Fitness" className="category-image" />
          <button className="category-btn">Fitness</button>
        </div>
        <div className="category">
          <img src={skincareImage} alt="Skincare" className="category-image" />
          <button className="category-btn">Skincare</button>
        </div>
        <div className="category">
          <img src={nutritionImage} alt="Nutrition" className="category-image" />
          <button className="category-btn">Nutrition</button>
        </div>
      </div>
    </div>
  );
}

export default Choices;
