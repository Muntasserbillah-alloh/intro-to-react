import { combineReducers } from "redux";
import { cartReducer } from "./src/pages/cart/cart.slice";
import { productReducer } from "./src/pages/product/product.slice";


const rootReducer = combineReducers({
    Cart: cartReducer,
    Product: productReducer
});

export default rootReducer;
