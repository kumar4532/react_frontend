import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const fetchProducts = async() => {
    const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${page * 20 - 20}`)
    const data = await res.json();

    console.log(data);
    if(data && data.products){
      setProducts(data.products)
      setTotalPages((data.total - 14) / 20)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [page])

  const selectedPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && 
        selectedPage <= totalPages && 
        selectedPage !== page 
    ) {
      setPage(selectedPage)
    }
  }

  return (
    <>
      <div>
        {
          products.length>0 && <div className='products'>
            {
              products.map((prod) => {
                return (
                  <span key={prod.id} className='products__single'>
                    <img src={prod.thumbnail} alt={prod.title} />
                    <span>{prod.title}</span>
                  </span>
                )
              })
            }
          </div>
        }
        {
          products.length>0 && <div className='pagination'>
            <span
              className={page > 1 ? "" : "pagination__disable"} 
              onClick={() => selectedPageHandler(page - 1)}
            >
              👈
            </span>

              {
                [...Array(totalPages)].map((_, index) => {
                  return <span
                  className={page === index + 1 ? "pagination__selected" : ""}
                  key={index} 
                  onClick={() => selectedPageHandler(index + 1)}
                  >{index + 1}</span>
                })
              }

            <span
              className={page < totalPages ? "" : "pagination__disable"}
              onClick={() => selectedPageHandler(page + 1)}
            >
              👉
            </span>
          </div>
        }
      </div>
    </>
  )
}

export default App
