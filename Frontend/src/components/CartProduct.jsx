import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addToCart, removeOne, removeAll } from '../store/shoppingCartSlice'


const CartProduct = ({ item }) => {
  
  const dispatch = useDispatch()

  const add = () => {
    dispatch(addToCart(item))
  }

  const remove = () => {
    dispatch(removeOne(item._id))
  }

  const del = () => { 
    dispatch(removeAll(item._id))
  } 

  return (
    <div className='cart-product-container'>
      <div className='cart-row'>
          <img src={item.imageURL} alt={item.name} className='cart-img' />
        <div>
          <p className='cart-item-name'>{item.name}</p>
          <small className='cart-quantity'>{item.quantity} x {item.price}</small>
        </div>
      </div>
      <div className='cart-buttons'>
        <div>
          <button className='remove-btn' onClick={del}><FaTrash /></button>
        </div>
        <div>
          <button className='add-btn' onClick={add}>+</button>
          <button className='subtract-btn' onClick={remove}>-</button>
        </div>
      </div>
    </div>
  )
}

export default CartProduct