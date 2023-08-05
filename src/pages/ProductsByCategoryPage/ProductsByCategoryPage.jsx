import React, { useEffect, useState } from 'react'
import s from "./ProductsByCategoryPage.module.css"
import { useParams } from 'react-router-dom'
import { getProductsByCategory } from '../../requests/productsByCategories_req'
import { useDispatch, useSelector } from 'react-redux'
import Preloader from '../../components/Preloader/Preloader'
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer'

const ProductsByCategoryPage = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const {productsByCategory, status} = useSelector(state => state.productsByCategory)

  useEffect(() => {
    dispatch(getProductsByCategory(category))
  }, [category])
  if (status === "succeeded") {
    return (
      <section className={s.section}>
        <h2 className={s.title}>{productsByCategory.category.title}</h2>
        <div className={s.sort_products_container}>
          <div className={s.price_fromTo}>
            <h3>Price</h3>
            <input type="text" placeholder='from'/>
            <input type="text" placeholder='to'/>
          </div>
          <div className={s.discounted}>
            <h3>Discounted items</h3>
            <input type="checkbox" />
          </div>
          <div className={s.sorted}>
            <h3>Sorted</h3>
            <select id="sortedBy">
              <option value="" key="">by default</option>
            </select>
          </div>
        </div>
        <ProductsContainer products_data={productsByCategory.data}/>
      </section>
    )
  }
  return (
    <Preloader />
  )
}

export default ProductsByCategoryPage