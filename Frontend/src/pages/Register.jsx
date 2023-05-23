import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="form-page">
      <h1>Please Register Your new Account</h1>
      <form className="form-group">
        
        <div className="form-group">
            <label htmlFor="firstName">First name*</label>
            <input type="text" name="lastName" id="firstName" />
        </div>
        
        <div className="form-group">
            <label htmlFor="email">E-mail*</label>
            <input type="email" name="email" id="email" />
        </div>

        <div className="form-group">
            <label htmlFor="password">Password*</label>
            <input type="password" name="password" id="password" />
        </div>

        <div className="policy">
            <input type="checkbox" name="policy"></input>
            <label className="terms" htmlFor="policy">I have read and accepts the terms and agrements</label>
        </div>

        <div className="already">
            <a className="terms" htmlFor="login" ><NavLink to="/login">Already have an account?</NavLink></a>
        </div>

        <button className="submit-btn">Submit</button>

      </form>
    </div>
  );
};

export default Register;
