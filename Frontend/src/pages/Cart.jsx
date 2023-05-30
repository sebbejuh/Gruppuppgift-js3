import React, { useContext } from "react";
import CartProduct from "../components/CartProduct";
import { useSelector } from "react-redux";
import { AuthContext } from "../context/AuthContext";
// import { removeFromCart } from '../store/shoppingCartSlice'

const Cart = () => {
    const cart = useSelector((state) => state.shoppingCart.cartItems);
    const order = useSelector((state) => state.shoppingCart);
    const { token } = useContext(AuthContext);

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
    };

    return (
        <div>
            {cart.length < 1 && <div className="empty-text">Your cart is empty</div>}
            {cart.map((item) => (
                <CartProduct key={"cart" + item._id} item={item} />
            ))}
            <div className="total">
                <p>Total price: kr</p>
                <p>Tax and shipping calcuated at checkout</p>
            </div>
            <div>
                <button className="clear-btn">Clear cart</button>
                <button className="continue-btn">Continue shopping</button>
                <button className="checkout-btn" onClick={handleCheckout}>
                    Proceed to checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;
