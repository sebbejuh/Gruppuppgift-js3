import React, { useState } from "react";
import { NavLink } from "react-router-dom";




const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",

    });

    const handleChange = (e) => {
        setFormData(prevData => {
            return {
            ...prevData,
            [e.target.name]: e.target.value
        }
        })
    }
    
    const handleSubmit = async e => {
        e.preventDefault()
        const res = await fetch("http://localhost:7777/api/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            
    }

  return (
    <div className="form-page">
      <h1>Please Register Your new Account</h1>
      <form onSubmit={handleSubmit} className="form-group">
        
        <div className="form-group">
            <label htmlFor="username">Username*</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </div>

        <div className="form-group">
            <label htmlFor="password">Password*</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>

        <div className="policy">
            <input type="checkbox" name="policy"></input>
            <label className="terms" htmlFor="policy">I have read and accepts the terms and agrements</label>
        </div>

        <div className="already">
            <NavLink to="/login">Already have an account?</NavLink>
        </div>

        <button className="submit-btn">Submit</button>

      </form>
    </div>
  );
};

export default Register;
