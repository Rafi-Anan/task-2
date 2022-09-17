import React from 'react'
import Cart from './Cart/Cart'
import { useSelector } from 'react-redux';
import TotalItem from './TotalItem';
import TotalPrice from './TotalPrice';

const Carts = () => {
    const carts = useSelector((state) => state.carts)

    return (
        <div
            className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4"
        >
            <div
                className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
            >
                {carts.map((cart, i) =>
                    <Cart key={i} cart={cart} />
                )}

                <div
                    className="flex justify-center items-center text-center"
                >
                   <TotalItem />
                </div>
            </div>
            <div
                className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
            >
                <TotalPrice />
            </div>
        </div>
    )
}

export default Carts