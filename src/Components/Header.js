import React from "react";

import "./Header.css";

import profile_pic from "../Images/profilepic.png";
import logo_img from "../Images/logo.png";

export default function Header() {
    return (
        <nav class="navbar navbar-expand-md navbar-light sticky-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img class="img-fluid" src={logo_img} width="200" height="200" />        
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse justify-content-end collapse" id="mainNav">
                    <ul class="navbar-nav align-items-center flex-row">
                        <li class="nav-item ">
                            <button type="button" class="btn btn-lg" id="boldText" onClick={() => { window.location.href = "loopico-prototype-website/#/create" }}>Add Your Material</button>
                            <button type="button" class="btn btn" id="boldText" onClick={() => { window.location.href = "loopico-prototype-website/#/log-out" }}>Log out</button>
                        </li>
                        <li class="nav-item">
                            <img class="img-fluid profile-pic" src={profile_pic} width="50" height="50" />
                        </li>
                         <li class="nav-item">
                            <h5 class="profile-pic-text">Hi Mark</h5>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}