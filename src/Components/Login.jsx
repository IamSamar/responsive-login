import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Image from "../images/sample.png";
import history from "./history.jsx";
function Login() {
  return (
    <div className="container m-0 p-0">
      <div className="row">
        <div className="col d-none d-md-block d-lg-block d-xl-block">
          {/* Background Image is here */}
          <img
            className="w-100 imageContainer"
            src={Image}
            alt="backgroundImage"
          />
          {/* Text over the Image Starts here */}
          <div className="textContainer ml-5">
            <div className="font-weight-bold">Welcome Back!</div>
            <div className="mt-5">
              Lorem Ipsum Lorem IpsumLorem IpsumLorem Lorem Ipsum
            </div>
            <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum</div>
          </div>
          {/* Text over the Image Ends Here */}
        </div>
        {/* Login Form Started here */}
        <div className="col">
          <div className="primary-color margin mb-5 font-weight-bold">
            Let's Get Started
          </div>
          <form className="needs-validation novalidate">
            <div className="form-container align-items-center">
              <div class="form-group">
                {/*Email  */}
                <input
                  type="email"
                  class="form-control rounded-corners background"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="form-group">
                {/* password field */}
                <input
                  type="password"
                  class="form-control rounded-corners  background"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  required
                />
              </div>
              {/* onClick of Sign In button push dashboard to history */}
              <button
                type="submit"
                class="btn sign-in rounded-corners text-center w-100"
                onClick={() => history.push("/dashboard")}
              >
                SIGN IN
              </button>
            </div>
          </form>
        </div>
        {/* Login Form Ends here */}
      </div>
    </div>
  );
}
export default Login;
