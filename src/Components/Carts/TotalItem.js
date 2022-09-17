import React from 'react'
import { useSelector } from 'react-redux'

const TotalItem = () => {
    const carts =  useSelector((state) => state.carts)
   

    const priceQuantity = carts.map((item) => {
     return item.cartQuantity;
    })
 
    const totalItem = priceQuantity.reduce((initialP, currentP) => {
     return initialP + currentP;
 
    }, 0)
   

  return (
    <div className="text-xl font-semibold">
    <p>Total Item</p>
    <p className="text-5xl">  {totalItem}</p>

</div>
  )
}

export default TotalItem