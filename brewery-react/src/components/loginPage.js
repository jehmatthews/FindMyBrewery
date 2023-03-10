import React from "react";
import { redirect } from "react-router-dom";
import '../styles/login.scss';
import Navigation from './Navigation';

export default function LoginPage() {
  return (
    <div className="login-container">
      <Navigation />
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
