import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHotjar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const { token, updateToken } = useContext(AuthContext);
    const [isLoggedIn, setIsLoggedIn] = useState(!!token);
    const [userData, setUserData] = useState({ userName: "Loading..." });

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
                if (data && data.userName) {
                    setUserData(data);
                }
            } catch (error) {
                console.log("Error fetching user data:", error);
            }
        };

        setIsLoggedIn(!!token);
        fetchUserData();
    }, [token]);

    const handleLogout = () => {
        updateToken(null);
        navigate("/");
    };

    return (
        <nav className="navbar">
            <div className="container d-flex">
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
                        <NavLink to={isLoggedIn ? "/user-details" : "/login"}>
                            {isLoggedIn ? `Welcome ${userData?.userName}` : "Login"}
                        </NavLink>
                    </li>
                    {isLoggedIn && <li onClick={handleLogout}>Logout</li>}
                    <li>
                        <NavLink to="/cart">
                            <FaShoppingCart />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
