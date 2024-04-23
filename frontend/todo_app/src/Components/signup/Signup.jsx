import React, { useState } from 'react';
import './Signup.css';
import HeadingComp from './Headingcomp';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const history = useNavigate();

  const [inputs, setInputs] = useState({
    email: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/todo/signin", inputs);
      console.log(response); // Log the _id property directly
      setInputs({
        email: '',
        username: '',
        password: ''
      });
      history('/signin');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  

  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 column d-flex justify-content-center align-items-center ">
            <div className="d-flex flex-column  w-100 p-3">
            <input
                className="p-2 my-3 input-signup"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                onChange={handleChange}
                value={inputs.email}
                required // Add the required attribute here
              />
              
            <input
              className="p-2 my-3 input-signup"
              type="text"
              name="username"
              placeholder="Enter Your Username"
              onChange={handleChange}
              value={inputs.username}
              required // Add the required attribute here
            />

            <input
              className="p-2 my-3 input-signup"
              type="password"
              name="password"
              placeholder="Enter Your Password"
              onChange={handleChange}
              value={inputs.password}
              required // Add the required attribute here
            />


              <button className="btn-signup p-2" onClick={handleSubmit}>
                Sign Up
              </button>
            </div>
          </div>
          <div className=" col-lg-4 column col-left d-lg-flex justify-content-center align-items-center  d-none">
            <HeadingComp first="Sign" second="Up" />
          </div>
        </div>
      </div>
    </div>
  );
};
