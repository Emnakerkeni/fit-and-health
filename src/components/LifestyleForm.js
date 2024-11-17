import React from "react";
import "./../styles/LifestyleForm.css"; // Importation du fichier CSS
import yogaImage from "../assets/yoga.jpg";

function LifestyleForm() {
  return (
    <div className="form-container">
      <div className="form-content">
        <h1>Lifestyle parameters</h1>
        <form>
          <div className="form-group">
            <label htmlFor="water">Water usage</label>
            <select id="water">
              <option value="1.5L">1.5L</option>
              <option value="2.0L">2.0L</option>
              <option value="2.25L">2.25L</option>
              <option value="3.0L">3.0L</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight</label>
            <input type="number" id="weight" placeholder="Enter your weight" />
          </div>
          <div className="form-group">
            <label htmlFor="height">Height</label>
            <input type="number" id="height" placeholder="Enter your height" />
          </div>
          <div className="form-group">
            <label htmlFor="skin">What's your skin type</label>
            <input type="text" id="skin" placeholder="Enter your skin type" />
          </div>
          <div className="form-group">
            <label htmlFor="activity">What's your activity level</label>
            <input
              type="text"
              id="activity"
              placeholder="Enter your activity level"
            />
          </div>
          <button type="submit">Next</button>
        </form>
      </div>
      <div className="form-image">
        <img src={yogaImage} alt="Yoga" />
      </div>
    </div>
  );
}

export default LifestyleForm;
