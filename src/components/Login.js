import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img src="amazon_logo.png" className="login__logo" alt="amazon logo" />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button className="login__signInButton">Sign In</button>
        </form>
        <p>
          By signing you agree to the AMAZON CLONE Conditions of Use & Sale.
          Please see our Privacy Notice,Or Cookies Notice and Our Internet-Based
          Ads Notice.
        </p>
        <button className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
