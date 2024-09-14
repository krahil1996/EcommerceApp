// // store.js
// import { configureStore } from '@reduxjs/toolkit';
// import itemReducer from './cartSlice';

// const store = configureStore({
//   reducer: {
//     cart: itemReducer
//     // Add other reducers here if you have more
//   }
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./rootReducer";


const store=configureStore({reducer:RootReducer});

export default store;