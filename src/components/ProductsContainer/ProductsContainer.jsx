import React, { useState } from 'react'
import s from "./ProductsContainer.module.css"
import ProductItem from '../ProductItem/ProductItem'

const ProductsContainer = ({products_data}) => {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const handleLoadMore = () => {
    // Увеличиваем количество отображаемых товаров на 8
    setVisibleProducts((prevVisible) => prevVisible + 8);
  };
  const displayedProducts = products_data.slice(0, visibleProducts);
  return (
    <div className={s.products_wrapper}>
      <ul className={s.products_container}>
        {
            displayedProducts.map((el) => <ProductItem key={el.id} {...el}/>)
        }
      </ul>
      {
        visibleProducts < products_data.length 
        ? <div className={s.load_more_btn} onClick={handleLoadMore}>Load More</div>
        : ""
      }
    </div>
  )
}

export default ProductsContainer