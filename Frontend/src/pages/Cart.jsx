import React, { useContext } from "react";
import CartProduct from "../components/CartProduct";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from 'react-router-dom'
import { clearCart } from "../store/shoppingCartSlice";
// import { removeFromCart } from '../store/shoppingCartSlice'

const Cart = () => {
    const cart = useSelector((state) => state.shoppingCart.cartItems);
    const total = useSelector((state) => state.shoppingCart.totalAmount);
    const order = useSelector((state) => state.shoppingCart);
    const { token } = useContext(AuthContext);
    const dispatch = useDispatch();
    const handleCheckout = async () => {
        const orderRows = order.cartItems.map((item) => {
            return { product: item._id, quantity: item.quantity };
        });

        const res = await fetch("http://localhost:7777/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ orderRows }),
        });
        const data = await res.json();
        console.log(data);

        
        dispatch(clearCart());
      
        
    };

    return (
        <div className="cart-container">
            {cart.length < 1 && <div className="empty-text">Your cart is empty</div>}
            {cart.map((item) => (
                <CartProduct key={"cart" + item._id} item={item} />
            ))}
            <div className="total">
                <p>Total price: {total}kr</p>
            </div>
            <div className="cart-btn">
                <button className="continue-btn"> <NavLink to={"/products"}>Continue shopping</NavLink> </button>
                <button className="checkout-btn" onClick={handleCheckout}>
                    <NavLink to={"/userDetails"}>Place order</NavLink>
                </button>
            </div>
        </div>
    );
};

export default Cart;
