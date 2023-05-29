// import React from 'react'
// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

//components
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

//sass files
import "./index.scss";
import "./App.scss";

//pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import ProductDetails from './pages/ProductDetails';
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import UserDetails from "./pages/userDetails";
import { AuthProvider } from "./context/AuthContext";
import NotFound from './pages/NotFound';

const App = () => {
    // const [user, setUser] = useState(null);

    return (
        <>
            <AuthProvider>
                <Navbar />
                <div className="container">
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/userDetails" element={<UserDetails />} />
                        <Route path="/products/:id" element={<ProductDetails/>} />
                        <Route path="*" element={<NotFound/>} />
                    </Routes>
                </div>
                <Footer/>
            </AuthProvider>
        </>
    );
};

export default App;
