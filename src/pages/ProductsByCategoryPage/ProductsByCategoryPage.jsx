import React, { useEffect, useState } from 'react'
import s from "./ProductsByCategoryPage.module.css"
import { useParams } from 'react-router-dom'
import { getProductsByCategory } from '../../requests/productsByCategories_req'
import { useDispatch, useSelector } from 'react-redux'
import Preloader from '../../components/Preloader/Preloader'
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer'
import Sort from '../../components/Sort/Sort'

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
        <Sort />
        <ProductsContainer products_data={productsByCategory.data}/>
      </section>
    )
  }
  return (
    <Preloader />
  )
}

export default ProductsByCategoryPage