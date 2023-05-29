import { createSlice } from '@reduxjs/toolkit';


const intialState = { 
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0
}

const getTotalQuantity = (cart) => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
}

const getTotalAmount = (cart) => {
    let amount = 0
    cart.forEach(item => {
      amount += item.price * item.quantity
    })
    return amount
} 


export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: intialState,
    reducers: {
        addToCart: (state, action) => {
            const itemRef = state.cartItems.find(item => item._id === action.payload._id);
            
            itemRef ? itemRef.quantity += 1 : state.cartItems.push({...action.payload, quantity: 1});

            state.totalAmount = getTotalAmount(state.cartItems);
            state.totalQuantity = getTotalQuantity(state.cartItems);
        },
        removeOne: (state, action) => {
            itemRef.quantity <= 1
      ? state.cart = state.cart.filter(item => item.product._id !== action.payload)
      : itemRef.quantity -= 1

      state.totalAmount = getTotalAmount(state.cart)
      state.totalQuantity = getTotalQuantity(state.cart)
    },
    removeAll : (state, action) => {
        // action.payload = id
        state.cart = state.cart.filter(item => item.product._id !== action.payload)
        state.totalAmount = getTotalAmount(state.cart)
        state.totalQuantity = getTotalQuantity(state.cart)
      },
      clearCart: (state) => {
        state.cart = []
        state.totalAmount = getTotalAmount(state.cart)
        state.totalQuantity = getTotalQuantity(state.cart)
      },
      placeOrder: (state) => {
        // Skulle behöva vara en async thunk
        const order = state.cart.map(item => {
        return { id: item.product._id, quantity: item.quantity }
        })
}
    }
});
export const { addToCart, removeOne, removeAll, clearCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;