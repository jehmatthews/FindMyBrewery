import React from "react";
import { redirect } from "react-router-dom";
import '../styles/login.scss';
import LoginNavigation from "./logInNav";

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-text">
        <h1 className="login-heading">FindMyBrewery</h1>
        <p className="login-paragraph">Login to search and find a brewery near you.</p>
      </div>
      <LoginNavigation />
        <h2>Log in</h2>
        <input
          type='text'
          placeholder="Enter Email"
          className="login-input"
        />
        <input
          type='password'
          placeholder="Enter Password"
          className="login-input"
        />
        <button className="login-button"><a href="/home">Login</a></button>
    </div>
  );
}
