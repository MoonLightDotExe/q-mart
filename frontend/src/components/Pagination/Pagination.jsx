import React from 'react'
import { useEffect, useState } from 'react'
import { formatCurrency } from '../../utilities/fromatCurrency'

import './Pagination.css'

function Pagination(){
  const [see, setsee] = useState(false)
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100")
    const data = await res.json()

    if (data && data.products) {
      setProducts(data.products);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= products.length / 10 && selectedPage !== page)
      setPage(selectedPage);
  };
 const quantity = 2
  return (
    <>
    
    <div>
      {products.length > 0 && (
        <div className='products' >
          {products.slice(page * 10 - 10, page * 10).map((prod) => {
            return (
              
              <div className='productssingle' key={prod.id} onClick={()=>setsee(!see)}>
                <img src={prod.thumbnail} alt={prod.title} />
                <span> {prod.title} </span>
                <h3 > { formatCurrency(prod.price)} </h3>
              </div>
            );
          })}
        </div>
      )}
        { see &&
    <div className="AddCart" >
      {quantity ===0 ?
      <button type='submit' className='Add_to_Cart'>
      + Add to Cart
      </button>
      :<div className='min'>
      
        <div className='max'>
          <button className='button'>
          -
        </button>
        <div>
        <span className='Quantity'>{quantity}</span> in cart
        </div>
        <button className='button'>
          +
        </button>
          </div>
          <button className='danger' >Remove</button>
          </div>
          
          } 
      
    </div>
}
    
      {products.length > 0 &&
        <div className='pagination'>
          <span
            onClick={() => selectPageHandler(page - 1)}
            className={page > 1 ? "" : "paginationdisable"}
          >
            ◀️
          </span>
          {[...Array(products.length / 10)].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? "paginationselected" : ""}
                onClick={() => selectPageHandler(i + 1)}
                key={i}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            onClick={() => selectPageHandler(page + 1)}
            className={page < products.length / 10 ? "" : "paginationdisable"}
          >
            ▶️
          </span>
        </div>
      }
    </div>
  
    </>
  )

}
export default Pagination