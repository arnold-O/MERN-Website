import React from "react";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <div className="container shadow my-5">
        <div className="row ">
          <div className="col-md-5 form d-flex p-5 flex-column align-items-center  justify-content-center">
            <h1 className="text-white">Welcome Back</h1>
            <p className="text-white">Enter your Credentials to Login</p>
            <h5 className="mb-4 text-white">OR</h5>
            <NavLink
              to="/register"
              className="btn btn-outline-light  rounded-pill pb-2 w-50"
            >
              Register
            </NavLink>
          </div>
          <div className="col-md-7 p-5">
            <h1 className="fw-bolder mb-4">Login</h1>
            <div class="mb-3">
              <label for="exampleFormControlInput1" className="form-label mb-3">
                Email address
              </label>
              <input
                type="email"
                className="form-control mb-3"
                id="exampleFormControlInput1"
                placeholder="arnoldgold@example.com"
              />
            </div>
           
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label mb-3">
                Password
              </label>
              <input
                type="password"
                className="form-control mb-3"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>

            <button className="btn btn-primary rounded-pill p-12">Login</button>
           
            
          </div>
        </div>
      </div>
    </div>
  );
}
