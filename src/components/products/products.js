import React, { useState, useEffect } from 'react'
import "./products.css"
import Product from './product';
import { AxiosInstance } from '../../config';

//Axios Request
const URL = "/products";
const fetchHandler = async () => {
  return await AxiosInstance.get(URL).then((res) => res.data)
}

function Products() {
  const [products, setProducts] = useState();
  useEffect(() => {

    fetchHandler().then((data) => setProducts(data.products));

  }, []);

  const [search, setSearch] = useState('');
  console.log(search)

  return (
    <div id='products'>

      <div class="group">
        <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input placeholder="Hunt Products!" type="search" className="search_input" onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div id='products_item'>
      <div className='products'>
      {products &&
        products
          .filter((product) => {
            return search.toLowerCase() === '' ? product : product.title.toLowerCase().includes(search);
          })
          .map((product, id) => (
            <div key={id}>
              <Product product={product} />
            </div>
          ))}
          </div>
          </div>
    </div>
  )
}

export default Products