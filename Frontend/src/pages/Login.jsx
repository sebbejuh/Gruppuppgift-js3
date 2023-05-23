import React, { useState } from "react";
import { NavLink } from "react-router-dom";


const Login = () => {

const [loginData, setLoginData] = useState({
  username: '',
  password: ''
})


const handleChange = (e) => {
  setLoginData(prevData => {
    return {
      ...prevData,
      [e.target.name]: e.target.value
    }
  })
}

const handleSubmit = async e => {
  e.preventDefault()
  const res = await fetch('http://localhost:7777/api/users/login', {
    method: "POST",
    headers: {
      "content-Type": "application/json"
    },
    body: JSON.stringify(loginData)
  })
  
}

  return (
    <div className="login-form-box">
      <div className="login-title">
      <p>Please Login to Your Account</p>
      <div className="login-title-border"/>
      </div>
     <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-input">
        <div className="register-link">
          <label htmlFor="username">Username*</label>
          <NavLink to="/register" className="link"><span>Don't have an Account yet?</span></NavLink>
        </div>
         <input type="text" name="username" id="username" value={loginData.username} onChange={handleChange}/>
      </div>
        <div className="login-input">
          <div className="forgot-pw">
            <label htmlFor="password">Password*</label>
          <NavLink to="#" className="link"><span>Forgot Your Password ?</span></NavLink>
          </div>
            <input type="password" name="password" id="password" value={loginData.password} onChange={handleChange}/>
        </div>
        <div className="login-checkbox">
          <input type="checkbox" name="checkbox" id="remember"/>
        <label htmlFor="checkbox">Please keep me logged in</label>
        </div>
        <button className="login-btn">Submit</button>
     </form>
    </div>
  );
};

export default Login;
