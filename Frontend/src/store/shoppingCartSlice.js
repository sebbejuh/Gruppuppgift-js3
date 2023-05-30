import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0,
};

const getTotalQuantity = (cartItems) => {
    let total = 0;
    cartItems.forEach((item) => {
        total += item.quantity;
    });
    return total;
};

const getTotalAmount = (cartItems) => {
    let amount = 0;

    cartItems.forEach((item) => {
        amount += item.price * item.quantity;
    });
    return amount;
};

export const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState: intialState,
    reducers: {
        addToCart: (state, action) => {
            const itemRef = state.cartItems.find(item => item._id === action.payload._id);
 
            itemRef 
            ? itemRef.quantity += 1 
            : state.cartItems = [...state.cartItems, {...action.payload, quantity: 1}];

            state.totalAmount = getTotalAmount(state.cartItems);
            state.totalQuantity = getTotalQuantity(state.cartItems);
        },
        removeOne: (state, action) => {
            const itemRef = state.cartItems.find((item) => item._id === action.payload);
            itemRef.quantity <= 1
                ? (state.cartItems = state.cartItems.filter((item) => item._id !== action.payload))
                : (itemRef.quantity -= 1);

            state.totalAmount = getTotalAmount(state.cartItems);
            state.totalQuantity = getTotalQuantity(state.cartItems);
        },
        removeAll: (state, action) => {
            // action.payload = id
            state.cartItems = state.cartItems.filter((item) => item._id !== action.payload);
            state.totalAmount = getTotalAmount(state.cartItems);
            state.totalQuantity = getTotalQuantity(state.cartItems);
        },
        clearCart: (state) => {
            state.cart = [];
            state.totalAmount = getTotalAmount(state.cartItems);
            state.totalQuantity = getTotalQuantity(state.cartItems);
        },
        getOrders: (state) => {
            return state.cartItems;
        },
    },
});
export const { addToCart, removeOne, removeAll, clearCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
