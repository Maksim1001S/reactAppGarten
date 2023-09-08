import React from 'react'
import s from "./AllProductsPage.module.css"
import { useSelector } from 'react-redux'
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer'
import Sort from '../../components/Sort/Sort'

const AllProductsPage = () => {
  const all_products = useSelector(state => state.products.products)
  return (
    <section className={s.section}>
      <h2 className={s.title}>All products</h2>
      <Sort allDiscounted={false}/>
      <ProductsContainer products_data={all_products}/>
    </section>
  )
}

export default AllProductsPage;