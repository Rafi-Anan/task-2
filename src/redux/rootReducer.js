import { combineReducers } from "redux";
import productReducer from './Products/productsReducer';
import cartsReducer from "./Carts/cartsReducer";



const rootReducer = combineReducers({
    products: productReducer, 
    carts: cartsReducer,

})

export default rootReducer;