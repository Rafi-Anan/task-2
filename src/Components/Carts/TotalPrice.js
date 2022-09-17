import React from 'react'
import { useSelector } from 'react-redux';

const TotalPrice = () => {
   const carts =  useSelector((state) => state.carts)
   

   const priceQuantity = carts.map((item) => {
    return item.cartPrice;
   })

   const totalPrice = priceQuantity.reduce((initialP, currentP) => {
    return initialP + currentP;

   }, 0)
  
//    const totalPrice = carts.price.reduce((initialP, finalP) => {
//        return initialP +finalP;
//    }, 0)

  return (
    <div
                    className="flex justify-center items-center text-center"
                >
                    <div className="text-xl font-semibold">
                        <p>Total Price</p>
                        <p className="text-5xl"> TK {totalPrice}</p>
                    </div>

                </div>
  )
}

export default TotalPrice