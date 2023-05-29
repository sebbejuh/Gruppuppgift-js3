import React from 'react'

const CartProducts = ({item}) => {
    const {name, price, imageURL} = item
  return (
    <div className='cart-cards'>
        <div className='img-box'>
            <img src={imageURL} alt="image of fruit" />
        </div>
        <div className='details'>
            <p>{name}</p>
            <p>{price} kr</p>
            <button>Add to cart</button>
        </div>
    </div>
  )
}

export default CartProducts