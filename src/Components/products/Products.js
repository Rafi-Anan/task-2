import React from 'react'
import { useSelector } from 'react-redux'
import ProductList from './Product/Product'

const Products = () => {
  const products = useSelector((state) => state.products)
  

  return (

    <div
      className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8"
    >
      {products.map((product, i) => 
        <ProductList key={i} product={product} />
      )}
    </div>
  )
}

export default Products