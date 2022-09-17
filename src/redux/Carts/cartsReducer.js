import { INCREMENT, DECREMENT, ADD_TO_CART } from "./actionsType"

const initialState =[];

const cartsReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_CART:

        const itemIndex = state.findIndex((item) => item.id === action.payload.id)
        if (itemIndex >= 0) {
            state[itemIndex].cartQuantity += 1;
            state[itemIndex].cartPrice += action.payload.price;

        } else{
            const tempProduct = {...action.payload, cartQuantity: 1, cartPrice: action.payload.price}
            state.push(tempProduct);

        }
          
        return [...state];

        case INCREMENT:
            return state.map((cartItem) => {
                if(cartItem.id === action.payload.id){
                    return {
                        ...cartItem,
                        cartQuantity: cartItem.cartQuantity +1,
                        cartPrice: cartItem.cartPrice + action.payload.price,

                    }
                }
                return cartItem;

            })

        case DECREMENT: 
        return state.map((cartItem) => {
            if(cartItem.id === action.payload.id){
                return {
                    ...cartItem,
                    cartQuantity: cartItem.cartQuantity - 1,
                    cartPrice: cartItem.cartPrice - action.payload.price,
                }
            }
            return cartItem;
    })
        





        
           
        default:
            return state;
    }
}

export default cartsReducer;







// previous functions


// case INCREMENT:

// const copiedCart = state.map((cartItem) => ({
//     ...cartItem,
// }))
// const itemIndex = copiedCart.findIndex( (cartItem) => cartItem.id === action.payload.id)

// if (itemIndex > -1) {
//     copiedCart[itemIndex].quantity = cartItem[itemIndex].quantity +1;
//     copiedCart[itemIndex].price = cartItem[itemIndex].price + action.payload.price;

// } else{
//     cartItem[itemIndex].quantity = 1;
//     cartItem[itemIndex].price = action.payload.price;

// }



// case DECREMENT:

// return state.map((cart) => {
//     if (cart.id === action.payload) {
//         return {
//             ...cart,
//             cartItems: cart.quantity -1
//         }
//     }
//     return cart;
// })
