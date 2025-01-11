import { combineReducers } from "redux";
import { cartReducer } from "./src/pages/cart/cart.slice";


const rootReducer = combineReducers({
    Cart: cartReducer,
});

export default rootReducer;
