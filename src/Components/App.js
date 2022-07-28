import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Redirect} from "react-router-dom";
import { HashRouter, Switch } from "react-router-dom";
import "./App.css"

import Header from "./Header";
import Dashboard from "./Dashboard";
import Marketplace from "./Marketplace";
import Create from "./Create";
import Post from "./Post";

import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";

export default function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        checkLogin();
    }, [], [loggedIn], [email], [password]);

    function checkLogin() {
        const tempEmail = sessionStorage.getItem("Email:");
        const tempPassword = sessionStorage.getItem("Password:");

        setEmail(tempEmail);
        setPassword(tempPassword);

        if (JSON.parse(tempEmail) === "loopico@loopico.com" && JSON.parse(tempPassword) === "password") {
            window.location.href = "/#/marketplace";
            setLoggedIn(true);
        } else {
            if (window.location.hash === "#/login") {
                window.location.href = "/#/login";
            } else if (window.location.hash === "#/signup") {
                window.location.href = "/#/signup";
            } else if (window.location.hash === "#/forgot-password") {
                window.location.href = "/#/forgot-password";
            }
            
            setLoggedIn(false);
        }
    }
    
    function logOut() {
        sessionStorage.setItem("Email:", JSON.stringify(""));
        sessionStorage.setItem("Password:", JSON.stringify(""));

        setLoggedIn(false);
        window.location.href = "/#/login";
    }
    
    return (
        <div className="App">
            <HashRouter basename="loopico-prototype-website/">
                <Switch>
                    <Route exact path="/login">
                        {loggedIn ? <Redirect to="/dashboard" /> : <Login />}
                    </Route>
                    <Route exact path="/signup">
                        {loggedIn ? <Redirect to="/dashboard" /> : <Signup />} 
                    </Route>
                    <Route exact path="/forgot-password">
                        {loggedIn ? <Redirect to="/dashboard" /> : <ForgotPassword />}
                    </Route>

                    <Route exact path="/log-out">
                        {loggedIn ? logOut : <Redirect to="/login" />}
                    </Route>
                    <Route exact path="/">
                        {loggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
                    </Route>
                    <Route exact path="/dashboard">
                        {loggedIn ? "" : <Redirect to="/login" />}
                        <Header />
                        <Dashboard />
                    </Route>
                    <Route exact path="/marketplace">
                        {loggedIn ? "" : <Redirect to="/login" />}
                        <Header />
                        <Marketplace />
                    </Route>
                    <Route exact path="/create">
                        {loggedIn ? "" : <Redirect to="/login" />}
                        <Header />
                        <Create />
                    </Route>
                    <Route exact path="/marketplace/post">
                        {loggedIn ? "" : <Redirect to="/login" />}
                        <Header />
                        <Post />
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    );
}