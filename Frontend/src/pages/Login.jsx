import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <h2>Register</h2>
      <NavLink to="/register">Go to register</NavLink>
    </div>
  );
};

export default Login;
