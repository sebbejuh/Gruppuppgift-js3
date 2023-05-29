import React from 'react'
import CartProduct from '../components/CartProduct'
import { useSelector} from 'react-redux'
// import { removeFromCart } from '../store/shoppingCartSlice'




const Cart = ( {checkout} ) => {
  // console.log(useSelector(state => state.shoppingCart.cartItems))
  
  const cart  = useSelector(state => state.shoppingCart.cartItems)
  // const dispatch = useDispatch()

  // console.log(cart)


  return (
    <div>
        {cart.length < 1 && (
        <div className='empty-text'>
          Your cart is empty
        </div>
        )}
        { cart.map(item => <CartProduct key={crypto.randomUUID} item={item} />)}
        <div className="total">
          {/* <CartProduct /> */}
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