import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: ''
  });

  const { email, username, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/todo/signup', {
        email,
        username,
        password
      });
      console.log(response.data);
      // Handle successful signup, such as redirecting to another page
    } catch (error) {
      console.error(error.response.data);
      // Handle signup error, such as displaying a message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Enter email"
        />
      </div>
      <div className="mb-3">
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Enter username"
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/login">sign in?</a>
      </p>
    </form>
  );
};

export default SignUp;
