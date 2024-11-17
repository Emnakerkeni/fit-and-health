// SignUpPage.js
import React from 'react';
import './SignUpPage.css'; // Use custom CSS for styling

function SignUpPage() {
  return (
    <div className="sign-up-page">
      <div className="form-section">
        <h2>Sign Up</h2>
        <form className="form">
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="number" placeholder="Age" required />
          <input type="text" placeholder="Country" required />
          <button type="submit">Next</button>
        </form>
      </div>
      <div className="image-section">
        <img src="path_to_your_image.jpg" alt="Sign Up Visual" />
      </div>
    </div>
  );
}

export default SignUpPage;

