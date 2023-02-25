import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const logInClick = () => {
    window.location = "/Login";
    console.log("Button clicked!");
  };
  const registerInClick = () => {
    window.location = "/Register";
    console.log("Button clicked!");
  };
  return (
    <div className="nav">
      <div className="website__name">linkup</div>
      <div className="nav__options">
        <div className="nav__text">Explore</div>
        <div className="nav__text">How It Works</div>
        <div className="nav__text">
          <Link to="/Login">Login</Link>
        </div>
        <div className="nav__text shade">
          <Link to="/Register">Register</Link>
        </div>
        {/* <div className="nav__text shade">Join as Creator</div> */}
      </div>
    </div>
  );
}

export default Nav;
