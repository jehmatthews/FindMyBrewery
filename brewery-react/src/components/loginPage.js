import React from "react";
import { redirect } from "react-router-dom";

export default function LoginPage(){
  return(
    <div>
      <h1>FindMyBrewery!</h1>
      <h2>Login</h2>
      <input
      type='text'
      placeholder="Enter Email"
      />
      <input
      type='text'
      placeholder="Enter Password"
      />
      <button ><a href="/home">Login</a></button>
    </div>
  )
}