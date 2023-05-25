import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHotjar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";

const Navbar = () => {
  //Cart
  const [cartVisibilty, setCartVisibilty] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  //ska läggas till på produkt card på en button (onClick={addProductToCart})
  const addProductToCart = (product) => {
    const newProduct = { ...product, quantity: 1 };
    setCartProducts([...cartProducts, newProduct]);
  };

  const { token, updateToken } = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch("http://localhost:7777/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (data) {
          setUser(data);
        }
        setIsLoggedIn(!!token);
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [token]);

  const handleLogout = () => {
    updateToken(null);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <Cart visibilty={cartVisibilty} products={cartProducts} onClose={() => setCartVisibilty(false)} />
      <div className="navbar-div">
        <Link to="/" className="brand">
          <FaHotjar /> <span>Fruits</span>
        </Link>
        <ul className="nav-links d-flex">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            {isLoggedIn ? (
              <NavLink to="/user-details">{user?.userName}</NavLink>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </li>
          {isLoggedIn && <li onClick={handleLogout}>Logout</li>}
          <button
            className="btn shopping-cart-btn"
            onClick={() => setCartVisibilty(true)}
          >
            <FaShoppingCart size={24} />
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
