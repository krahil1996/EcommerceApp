import { combineReducers } from "redux";
import { Cartreducers } from "./cartSlice";


const RootReducer=combineReducers({
    cart:Cartreducers
});

export default RootReducer;