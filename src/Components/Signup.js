import React, { useRef, useState } from "react";

import "./Signup.css";

import logo from "../Images/logo.png";

export default function Signup() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const numberRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");

  async function handleSubmit(e) {

    if (firstNameRef.current.value === "" || lastNameRef.current.value === "" || numberRef.current.value === "" || emailRef.current.value === "" || passwordRef.current.value === "") {
      setError("SignUp Failed");
    } else {
      setError("");
    }
  }
  
  return (
    <div id="signup" class="container-fluid">
      <div class="row align-items-start">
        <div class="column">
          <div class="column">
            <img class="img-fluid" src={logo} width="400" height="400" />
          </div>
          <div class="card">
            <div class="card-body">
              {error && <div class="alert alert-danger" role="alert">{error}</div>}
              <h2 class="card-title text-center">Sign Up</h2>
              <form>
                <div class="form-group mt-3">
                  <label id="text">First Name</label>
                  <input type="text" class="form-control mt-1" ref={firstNameRef} required/>
                </div>
                <div class="form-group mt-3">
                  <label>Last Name</label>
                  <input type="text" class="form-control mt-1" ref={lastNameRef} required/>
                </div>
                <div class="form-group mt-3">
                  <label>Phone Number</label>
                  <input type="number" class="form-control mt-1" ref={numberRef} required/>
                </div>
                <div class="form-group mt-3">
                  <label>Email</label>
                  <input type="email" class="form-control mt-1" ref={emailRef} required/>
                </div>
                <button class="btn" data-bs-toggle="modal" data-bs-target="#popupModal" onClick={() => handleSubmit()}>Sign Up</button>
              </form>
            </div>
          </div>
          <div class="link-div text-center">
            Already have an account? <a class="link-primary" onClick={() => { window.location.href = "/loopico-prototype-website/#/login" }}>Login</a>
          </div>
          <div class="modal fade" id="popupModal">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Please Check Your Email</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
