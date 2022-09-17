import {INCREMENT, DECREMENT, ADD_TO_CART} from "./actionsType"

export const increment = (id, price ) => {
return {
    type: INCREMENT,
    payload: {
        id,
        price,
        
       
    }
}
}
export const decrement = (id, price) => {
return {
    type: DECREMENT,
    payload: {
        id,
        price 
        
        
    }
}
}

export const addToCart = (product) => {
    return{
        type: ADD_TO_CART,
        payload: product,
    }
}