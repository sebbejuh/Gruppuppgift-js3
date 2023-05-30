import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addToCart, removeOne, removeAll } from '../store/shoppingCartSlice'


const CartProduct = ({ item }) => {
  
  const dispatch = useDispatch()

  const add = () => {
    dispatch(addToCart(item._id))
  }

  const remove = () => {
    dispatch(removeOne(item._id))
  }

  const del = () => { 
    dispatch(removeAll(item._id))
  } 

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
        <button className='remove-btn' onClick={del}><FaTrash /></button>
      </div>
      <div>
        <button className='add-btn' onClick={add}>+</button>
        <button className='subtract-btn' onClick={remove}>-</button>
      </div>
    </div>
  )
}

export default CartProduct