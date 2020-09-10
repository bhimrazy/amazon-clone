import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignIn = (e) => {
    e.preventDefault();
    //firebaselogin
  };

  const register = (e) => {
    e.preventDefault();
    //firebaseregister
  };
  return (
    <div className="login">
      <Link to="/">
        <img src="amazon_logo.png" className="login__logo" alt="amazon logo" />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="login__signInButton"
            onClick={SignIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing you agree to the AMAZON CLONE Conditions of Use & Sale.
          Please see our Privacy Notice,Or Cookies Notice and Our Internet-Based
          Ads Notice.
        </p>
        <button
          type="submit"
          className="login__registerButton"
          onClick={register}
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
