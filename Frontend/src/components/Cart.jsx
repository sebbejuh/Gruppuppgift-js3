import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";

function Cart({
  visibilty,
  products,
  onProductRemove,
  onClose,
  onQuantityChange,
}) {
  return (
    <div className="modal" style={{ display: visibilty ? "block" : "none" }}>
      <div className="shopping-cart">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="cart-btn" onClick={onClose}>
            <AiFillCloseCircle size={30} />
          </button>
        </div>
        <div className="cart-products">
          {products.lenght === 0 && <span className="empty-text">No products in cart</span>}

          {products.map((product) => (
            <div className="cart-product" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="cart-product-info">
                <h3>{product.name}</h3>
                <span className="cart-product-price">
                  {product.price * product.quantity}kr
                </span>
              </div>
              <select
                className="count"
                value={product.count}
                onChange={(event) => {
                  onQuantityChange(product.id, event.target.value);
                }}
              >
                {[...Array(10).keys(0)].map((number) => {
                  const num = number + 1;
                  return (
                    <option value={num} key={num}>
                      {num}
                    </option>
                  );
                })}
              </select>
              <button
                className="btn cart-remove-btn"
                onClick={() => onProductRemove(product)}
              >
                <RiDeleteBin6Line size={20} />
              </button>
            </div>
          ))}
          {products.length > 0 && (
            <button className="btn checkout-btn">Checkout</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
