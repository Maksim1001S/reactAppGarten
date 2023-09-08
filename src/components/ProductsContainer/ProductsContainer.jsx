import React, { useEffect, useState } from 'react'
import s from "./ProductsContainer.module.css"
import ProductItem from '../ProductItem/ProductItem'
import { useSelector } from 'react-redux';

const ProductsContainer = ({products_data, page_container}) => {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [filteredProducts, setFilteredProducts] = useState([])
  const sort = useSelector(state => state.sort)


  

  const FilteredAndSortedProducts = () => {
    const filteredProducts = products_data.filter((el) => {
    const actualPrice = el.discont_price ? el.discont_price : el.price;
      return(
        (sort.discounted
          ? el.discont_price !== null
          : true
        ) &&
        (sort.price.priceFrom 
          ? actualPrice >= sort.price.priceFrom
          : true
        ) &&
        (sort.price.priceTo
          ? actualPrice <= sort.price.priceTo
          : true
        ) 
      )
      });
    
    switch (sort.sortedBy) {
      case "bydefault":
        return filteredProducts;
      case "byDesc":
        return filteredProducts.sort((a, b) => {
          const actualPrice_a = a.discont_price ? a.discont_price : a.price;
          const actualPrice_b = b.discont_price ? b.discont_price : b.price;
          return(
            actualPrice_a - actualPrice_b
          )
        });
      case "byAsc":
        return filteredProducts.sort((a, b) => {
          const actualPrice_a = a.discont_price ? a.discont_price : a.price;
          const actualPrice_b = b.discont_price ? b.discont_price : b.price;
          return(
            actualPrice_b - actualPrice_a
          )
        });
      default:
        return filteredProducts;
    }
  }
  
  useEffect(() => {
     setFilteredProducts(FilteredAndSortedProducts())
  }, [sort]);
  const handleLoadMore = () => {
    setVisibleProducts((prevVisible) => prevVisible + 8);
  };
  const displayedProducts = filteredProducts.slice(0, visibleProducts);
  return (
    <div className={s.products_wrapper}>
      <ul className={`${s.products_container} ${s[page_container]}`}>
        {
            displayedProducts.map((el) => <ProductItem key={el.id} {...el}/>)
        }
      </ul>
      {
        visibleProducts < filteredProducts.length 
        ? <div className={s.load_more_btn} onClick={handleLoadMore}>Load More</div>
        : ""
      }
    </div>
  )
}

export default ProductsContainer