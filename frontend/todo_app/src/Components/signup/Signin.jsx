import React from 'react'
import "./Signup.css"
import HeadingComp from './Headingcomp'

export const Signin = () => {


  return (
    <div className="signup">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 column d-flex justify-content-center align-items-center ">
          <div className="d-flex flex-column  w-100 p-3">
            <input
              className="p-2  my-3 input-signup"
              type="email"
              name="email"
              placeholder="Enter Your Email"
            />

            <input
              className="p-2 my-3 input-signup"
              type="password"
              name="password"
              placeholder="Enter Your Password"
              
            />

            <button className="btn-signup p-2" >
              Sign In
            </button>
          </div>
        </div>
        <div className=" col-lg-4 column col-left d-lg-flex justify-content-center align-items-center  d-none">
          <HeadingComp first="Sign" second="In" />
        </div>
      </div>
    </div>
  </div>
  )
}