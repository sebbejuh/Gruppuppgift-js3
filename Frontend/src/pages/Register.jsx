import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const { updateToken } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        userName: "",
        password: "",
    });

    const navigate = useNavigate("/");

    const handleChange = (e) => {
        setFormData((prevData) => {
            return {
                ...prevData,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:7777/api/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        updateToken(data);
        navigate("/");
    };

    return (
        <div className="form-page">
            <h1>Please Register Your new Account</h1>
            <form onSubmit={handleSubmit} className="form-group">
                <div className="form-group">
                    <label htmlFor="userName">Username*</label>
                    <input
                        type="text"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password*</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                <div className="policy">
                    <input type="checkbox" name="policy"></input>
                    <label className="terms" htmlFor="policy">
                        I have read and accepts the terms and agrements
                    </label>
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
