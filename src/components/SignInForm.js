import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignInForm.css"; // Assure-toi que ce chemin est correct

function SignInForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Par exemple, redirige vers la page lifestyle après la connexion
    navigate("/lifestyle");
  };

  return (
    <div className="app-container">
      <div className="image-section">
        <img src={require("../assets/fitness.jpg")} alt="Fitness" className="fitness-image" />
      </div>
      <div className="form-section">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit">Next</button>
        </form>
        <a href="/signup">S'inscrire</a>
      </div>
    </div>
  );
}

export default SignInForm;
