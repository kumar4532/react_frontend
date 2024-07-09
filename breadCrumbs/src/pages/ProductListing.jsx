import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function ProductListing() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then((res) => {
        setProducts(res.products);
    })
  }, [])

  return (
    <div>
      <h2>Listing Page</h2>

      <span>All Products</span>
      <div className='product-grid'>
        {
          products.map((prod) => {
            return <div className='product-card' key={prod.id}>
              <Link to={`/products/${prod.id}`}>
                <img src={prod.thumbnail} alt={prod.title} />
                <h3>{prod.title}</h3>
                <h3>${prod.price}</h3>
              </Link>
            </div>
          })
        }
      </div>
      <div>
        <button>
          <Link to={"/"}>Trending Products</Link>
        </button>
      </div>
    </div>
  )
}

export default ProductListing