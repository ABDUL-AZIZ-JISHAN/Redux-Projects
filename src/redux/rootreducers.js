import productReducer from "./product/productReducer";
import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";

const rootReducers = combineReducers({
    productReducer,
    cartReducer
})

export default rootReducers;