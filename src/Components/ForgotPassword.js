import React, { useRef, useState } from "react";

import "./ForgotPassword.css";

import logo from "../Images/logo.png";

export default function ForgotPassword() {
  const emailRef = useRef();
  const [error, setError] = useState("");

  async function handleSubmit(e) {

    if (emailRef.current.value === "") {
      setError("Email Does not Exist");
    } else {
      setError("");
    }
  }
  
  return (
    <div id="forgotpassword" class="container-fluid">
      <div class="row align-items-start">
        <div class="column">
          <div class="column">
            <img class="img-fluid" src={logo} width="400" height="400" />
          </div>
          <div class="card">
            <div class="card-body">
              {error && <div class="alert alert-danger" role="alert">{error}</div>}
              <h2 class="card-title text-center">Forgot Password</h2>
              <form>
                <div class="form-group mt-3">
                  <label>Email</label>
                  <input type="email" class="form-control mt-1" ref={emailRef} required/>
                </div>
                <button class="btn" onClick={() => handleSubmit()}>Reset Password</button>
              </form>
              <div class="link-div text-center">
                <a class="link-primary" onClick={() => { window.location.href = "/#/login" }}>Login</a>
              </div>
            </div>
          </div>
          <div class="link-div text-center">
             Need an account? <a class="link-primary" onClick={() => { window.location.href = "/#/signup" }}>Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  )
}
