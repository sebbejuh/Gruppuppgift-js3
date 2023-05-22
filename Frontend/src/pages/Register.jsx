import React from "react";

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
            <label htmlFor="lastName">Last name*</label>
            <input type="text" name="lastName" id="lastName" />
        </div>
        <div className="form-group">
            <label htmlFor="streetName">Street Name*</label>
            <input type="text" name="streetName" id="streetName" />
        </div>
        <div className="form-group">
            <label htmlFor="postalCode">Postal Code*</label>
            <input type="number" name="postCode" id="postCode" />
        </div>
        <div className="form-group">
            <label htmlFor="city">City*</label>
            <input type="text" name="city" id="city" />
        </div>
        <div className="form-group">
            <label htmlFor="mobile">Mobile (optional)</label>
            <input type="number" name="mobile" id="mobile" />
        </div>
        <div className="form-group">
            <label htmlFor="company">Company (optional)</label>
            <input type="company" name="company" id="company" />
        </div>
        <div className="form-group">
            <label htmlFor="email">E-mail*</label>
            <input type="email" name="email" id="email" />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password*</label>
            <input type="password" name="password" id="password" />
        </div>
        <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password*</label>
            <input type="password" name="confirmPassword" id="confirmPassword" />
        </div>
        <div className="policy">
            <input type="checkbox" name="policy"></input>
            <label className="terms" htmlFor="policy">I have read and accepts the terms and agrements</label>
        </div>
        <button className="submit-btn">Submit</button>

      </form>
    </div>
  );
};

export default Register;
