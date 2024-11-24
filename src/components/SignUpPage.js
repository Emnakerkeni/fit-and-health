import React, { useState } from 'react';
import '../styles/SignUpPage.css';

function SignUpPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setMessage('Inscription réussie !');
        setFormData({ username: '', email: '', password: '' });
      } else {
        setMessage(data.message || 'Erreur lors de l\'inscription.');
      }
    } catch (error) {
      setMessage('Erreur du serveur');
    }
  };

  return (
    <div className="sign-up-page">
      <div className="image-section">
        <img src={require('../assets/work.jpg')} alt="Work" className="work-image" />
      </div>
      <div className="form-section">
        <h2>Sign Up</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Next</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default SignUpPage;
