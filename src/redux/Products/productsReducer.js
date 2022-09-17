import { DECREMENT_STOCK, INCREMENT_STOCK } from "./actionsTypes"

const initialState = [
    {
        id: 0,
        title: "Lenevo think pad 2010",
        quantity: 20,
        price: 35500,

    },
    {
        id: 1,
        title: "Apple macbook air",
        quantity: 12,
        price: 85500,

    },
    {
        id: 2,
        title: "Assus vivo Book 3021",
        quantity: 10,
        price: 55500,

    },
]

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case DECREMENT_STOCK:

            return state.map((product) => {
                if (product.id === action.payload) {
                    return {
                        ...product,
                        quantity: product.quantity - 1,
                    }

                }
                return product;
            })

        case INCREMENT_STOCK:
            return state.map((product) => {
                if (product.id === action.payload ) {
                    return {
                        ...product,
                        quantity: product.quantity + 1,
                    }

                }
                return product;
            })


        default:
            return state;



    }
}


export default productReducer;

