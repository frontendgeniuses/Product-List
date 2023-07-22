import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'


const Home = () => {

  const [products, setProducts] = useState([])



useEffect(()=>{
  getProduct()
}, [])


const getProduct = () => {
  const BASE_URL = 'https://fakestoreapi.com/products'
  axios(BASE_URL)
  .then((res) => {
    setProducts(res.data)
    
  }).catch((err) => {
    console.log(err)
    
  });
}
  return (
    <div className='card-container'>
       {products.map((item)=> (
      <ProductCard key={item.id} item={item} />
    ))}
    </div>
  )

}

export default Home