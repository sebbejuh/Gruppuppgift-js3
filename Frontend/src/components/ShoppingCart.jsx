// import React from 'react'
// import CartProduct from './CartProduct'
// import { useSelector } from 'react-redux'

// const ShoppingCart = () => {

//   const { cart } = useSelector(state => state.shoppingCart)
  

//   return (
//     <div>
//         {cart.lenght < 1 && (
//             <div className='empty-text'>
//                 Your cart is empty
//             </div>
//         )}
//         { cart.map(item => <CartProduct key={item.product._id} item={item} />)}
//         <div className="straight-line"></div>
//         <div className="total"></div>
//     </div>
//   )
// }

// export default ShoppingCart