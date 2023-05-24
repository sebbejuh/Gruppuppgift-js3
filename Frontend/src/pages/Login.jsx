import { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:7777/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="login-form-box">
      <div className="login-title">
        <p>Please Login to Your Account</p>
        <div className="login-title-border" />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-input">
          <div className="register-link">
            <label htmlFor="userName">Username*</label>
            <NavLink to="/register" className="link">
              <span>Don't have an Account yet?</span>
            </NavLink>
          </div>
          <input
            type="text"
            name="userName"
            id="userName"
            value={loginData.userName}
            onChange={handleChange}
          />
        </div>
        <div className="login-input">
          <div className="forgot-pw">
            <label htmlFor="password">Password*</label>
            <NavLink to="#" className="link">
              <span>Forgot Your Password ?</span>
            </NavLink>
          </div>
          <input type="password" name="password" id="password" />
        </div>
        <div className="login-checkbox">
          <input
            type="checkbox"
            name="checkbox"
            id="remember"
            value={loginData.password}
            onChange={handleChange}
          />
          <label htmlFor="checkbox">Please keep me logged in</label>
        </div>
        <button className="login-btn">Submit</button>
      </form>
    </div>
  );
};

export default Login;
