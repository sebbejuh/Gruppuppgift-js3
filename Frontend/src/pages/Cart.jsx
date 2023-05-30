import React from 'react'
import CartProduct from '../components/CartProduct'
import { useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom'
// import { removeFromCart } from '../store/shoppingCartSlice'




const Cart = () => {
  
  const cart  = useSelector(state => state.shoppingCart.cartItems)
  const totalAmount = useSelector(state => state.shoppingCart.totalAmount)
  

  return (
    <div className='cart-container'>
        {cart.length < 1 && (
        <div className='empty-text'>
          Your cart is empty
        </div>
        )}
        { cart.map(item => <CartProduct key={'cart' + item._id} item={item} />)}
        <div className="total">
          <p>Totalsumma inkl. moms: {totalAmount}kr</p>
        </div>
        <div className='cart-btn'>
          <button className="continue-btn"><NavLink to={"/products"}>Continue Shopping</NavLink></button>
          <button className="checkout-btn">Proceed to checkout</button>
        </div>
    </div>
  )
}

export default Cart