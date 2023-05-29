import React from 'react'
import CartProduct from '../components/CartProduct'
import { useSelector} from 'react-redux'
// import { removeFromCart } from '../store/shoppingCartSlice'




const Cart = () => {
  
  const cart  = useSelector(state => state.shoppingCart.cartItems)

  return (
    <div>
        {cart.length < 1 && (
        <div className='empty-text'>
          Your cart is empty
        </div>
        )}
        { cart.map(item => <CartProduct key={'cart' + item._id} item={item} />)}
        <div className="total">
          <p>Total price: kr</p>
          <p>Tax and shipping calcuated at checkout</p>
        </div>
        <div>
          <button className="clear-btn">Clear cart</button>
          <button className="continue-btn">Continue shopping</button>
          <button className="checkout-btn">Proceed to checkout</button>
        </div>
    </div>
  )
}

export default Cart