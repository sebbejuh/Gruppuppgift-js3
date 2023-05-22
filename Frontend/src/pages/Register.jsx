import React from "react";

const Register = () => {
  return (
    <div className="form-page">
      <h1>Register New User</h1>
      <form>
        <div className="form-group">
            <label htmlFor="firstName">First name:</label>
            <input type="text" name="lastName" id="firstName" />
        </div>
        <div className="form-group">
            <label htmlFor="lastName">Last name:</label>
            <input type="text" name="lastName" id="lastName" />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" />
        </div>
        <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" name="confirmPassword" id="confirmPassword" />
        </div>
        <button className="btn">Register</button>

      </form>
    </div>
  );
};

export default Register;
