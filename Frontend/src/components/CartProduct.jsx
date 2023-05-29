import React from 'react'
import { FaTrash } from 'react-icons/fa'


const CartProduct = ({ item }) => {
  console.log(item)
  // const dispatch = useDispatch()

  // const add = () => {
  //   dispatch(addToCart(item.product))
  // }

  // const remove = () => {
  //   dispatch(removeFromCart(item.product._id))
  // }

  // const del = () => { 
  //   dispatch(deleteFromCart(item.product._id))
  // } 

  return (
    <div className='cart-product-container'>
      <div>
        <img src={item.imageURL} alt={item.name} className='cart-img' />
        <div>
          <p>{item.name}</p>
          <small>{item.quantity} x {item.price}</small>
        </div>
      </div>

      
      <div>
        <button className='remove-btn'><FaTrash /></button>
      </div>
      <div>
        <button className='add-btn'>+</button>
        <button className='subtract-btn'>-</button>
      </div>
    </div>
  )
}

export default CartProduct