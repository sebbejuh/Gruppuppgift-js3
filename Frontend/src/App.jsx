<<<<<<< Updated upstream
import React from "react";
=======
import React, { useState, useEffect, useContext } from "react";
>>>>>>> Stashed changes
import { Route, Routes } from "react-router-dom";

//components
import Navbar from "./components/Navbar";

//sass files
import "./index.scss";
import "./App.scss";

//pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
<<<<<<< Updated upstream
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="products" element={<Products />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="cart" element={<Cart />} />
                </Routes>
            </div>
=======
    // const [user, setUser] = useState(null);

    return (
        <>
            <AuthProvider>
                <Navbar />
                <div className="container">
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="products" element={<Products />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="cart" element={<Cart />} />
                    </Routes>
                </div>
            </AuthProvider>
>>>>>>> Stashed changes
        </>
    );
};

export default App;
