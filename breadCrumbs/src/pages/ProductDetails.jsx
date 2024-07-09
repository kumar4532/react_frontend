import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {

  const { id } = useParams();
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(res => {
      setProduct(res)
    })
  }, [])

  return (
    <div>
        <h2>Product Detail Page</h2>
        {
          product?(
            <div>
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <h3>${product.price}</h3>
              <p>{product.description}</p>
            </div>
          ): <p>Loading...</p>
        }
    </div>
  )
}

export default ProductDetails