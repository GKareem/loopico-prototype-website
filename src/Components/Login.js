import React, { useRef, useState } from "react";

import "./Login.css";

import logo from "../Images/logo.png";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");

  async function handleSubmit(e) {

    window.location.href = "/loopico-prototype-website/#/login";

    sessionStorage.setItem("Email:", JSON.stringify(emailRef.current.value));
    sessionStorage.setItem("Password:", JSON.stringify(passwordRef.current.value));

    if (emailRef.current.value !== "loopico@loopico.com" || passwordRef.current.value !== "password") {
      setError("Login Failed");
    } else {
      setError("");
    }
  }
  
  return (
    <div id="login" class="container-fluid">
      <div class="row align-items-start">
        <div class="column">
          <div class="column">
            <img class="img-fluid" src={logo} width="400" height="400" />
          </div>
          <div class="card">
            <div class="card-body">
              {error && <div class="alert alert-danger" role="alert">{error}</div>}
              <h2 class="card-title text-center">Login</h2>
              <form>
                <div class="form-group mt-3">
                  <label>Email</label>
                  <input type="email" class="form-control mt-1" ref={emailRef} required/>
                </div>
                <div class="form-group mt-3">
                  <label>Password</label>
                  <input type="Password" class="form-control mt-1" ref={passwordRef} required/>
                </div>
                <button class="btn" onClick={() => handleSubmit()}>Log In</button>
              </form>
              <div class="link-div text-center">
                <a class="link-primary" onClick={() => { window.location.href = "/loopico-prototype-website/#/forgot-password" }}>Forgot Password?</a>
              </div>
            </div>
          </div>
          <div class="link-div text-center">
            Need an account? <a class="link-primary" onClick={() => { window.location.href = "/loopico-prototype-website/#/signup" }}>Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  )
}
