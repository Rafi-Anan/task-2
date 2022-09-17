import React from 'react'
import {decrement, increment} from "../../../redux/Carts/actions"

import { useDispatch } from 'react-redux';
import { decrementStock, incrementStock } from '../../../redux/Products/Actions';

const Cart = ({ cart }) => {
   

    const {title, cartQuantity, id, price, quantity} = cart;
    const dispatch = useDispatch()
 
     

    const handleStockDecrement = (id) => { 
        dispatch(decrementStock(id))  
    }
    const handleStockIncrement = (id) => {
         dispatch(incrementStock(id))
    }
    const incrementCart = (id, price) => {
       dispatch(increment(id, price))
    }
    const decrementCart = (id, price) => {
       dispatch(decrement(id, price ))
    }

    return (
        <div className="flex justify-between border-b-2 mb-2">
            <div className="text-lg py-2">
                <p>{title}</p>
            </div>
            <div className="text-lg py-2">
                <div
                    className="flex flex-row space-x-2 w-full items-center rounded-lg"
                >
                    <button
                        className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                        disabled={cartQuantity < 1 ? true: false}
                        // disabled={disabledDecrement}
                        onClick={ () =>{
                            decrementCart(id, price)
                            handleStockIncrement(id)
                            
                           
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M18 12H6"
                            />
                        </svg>
                    </button>
                    <p >{cartQuantity}</p>
                    <button
                        className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                        disabled={quantity === cartQuantity ? true: false}
                        onClick={() => {
                            incrementCart(id, price)
                            handleStockDecrement(id)
                        

                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart