import React, { useState } from 'react';
import './Signup.css';
import HeadingComp from './Headingcomp';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';

export const Signin = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/todo/login', inputs);
      if (response && response.data && response.data.message) {
        console.log(response);
        alert(response.data.message);
        setInputs({
          email: '',
          password: ''
        });
        dispatch(authActions.login());
        if (response.data.user && response.data.user._id) {
          sessionStorage.setItem('id', response.data.user._id);
        }
        history('/todo');
      } else {
        console.error('Invalid response format:', response);
        alert('Unexpected response from the server');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while processing your request');
    }
  };
  

  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 column d-flex justify-content-center align-items-center ">
            <div className="d-flex flex-column w-100 p-3">
              <input
                className="p-2 my-3 input-signup"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={inputs.email}
                onChange={handleChange}
              />

              <input
                className="p-2 my-3 input-signup"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={inputs.password}
                onChange={handleChange}
              />

              <button className="btn-signup p-2" onClick={handleSubmit}>
                Sign In
              </button>
            </div>
          </div>
          <div className="col-lg-4 column col-left d-lg-flex justify-content-center align-items-center d-none">
            <HeadingComp first="Sign" second="In" />
          </div>
        </div>
      </div>
    </div>
  );
};
