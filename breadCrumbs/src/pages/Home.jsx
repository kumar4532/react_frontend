import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {

  const [trendingProducts, setTrendingProducts] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then((res) => {
        const sliceTrending = res.products.slice(0, 9)
        setTrendingProducts(sliceTrending);
    })
  }, [])

  return (
    <div>
      <h2>Home Page</h2>

      <span>Trending Products</span>
      <div className='product-grid'>
        {
          trendingProducts.map((prod) => {
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
          <Link to={"/products"}>View All Products</Link>
        </button>
      </div>
    </div>
  )
}

export default Home