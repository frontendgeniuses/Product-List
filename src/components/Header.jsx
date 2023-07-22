
//* product category axios ile çekilecek, gelen değere göre filtreleme yapılacak.
  //* ürün çeşitleri isimleri button şeklinde yazdırılacak 
  //* map ile açıp kategorileri yazdırmalıyız filter yada if kullanılabilir

import axios from "axios";
import { useEffect, useState } from "react";


const Header = ({products, setProducts,data}) => {
  const [category, setCategory] = useState([])

  useEffect(() => {
    getCategory()
  }, [])
  

  const getCategory = () => {
    const CATEGORY_URL = 'https://fakestoreapi.com/products/categories/'
    axios(CATEGORY_URL)
    .then((res) => {
      setCategory(res.data)
      console.log(res.data)
     
    }).catch((err) => {
      console.log(err)
      
    });
  }
  const handleClick = (e) =>{ 
    
  data()
   setProducts(products.filter((item) => item.category == e))
  }

  return (

    <div className='header'>
      <h1>Products List</h1>

      <div className="btn-container">
        <button onClick={handleClick}  className="btn">ALL</button>
        {category.map((item)=> (
        <button onClick={()=>handleClick(item)} className='btn'>{item}</button>
      ))}
      </div>
      
      </div>
   
  )
}

export default Header