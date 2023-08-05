import React from 'react'
import s from "./AllProductsPage.module.css"
import { useSelector } from 'react-redux'
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer'

const AllProductsPage = () => {
  const all_products = useSelector(state => state.products.products)
  return (
    <section className={s.section}>
      <h2 className={s.title}>All products</h2>
      <div className={s.sort_products_container}>
        <div className={s.price_fromTo}>
          <h3>Price</h3>
          <input type="text" placeholder='from'/>
          <input type="text" placeholder='to'/>
        </div>
        <div className={s.sorted}>
          <h3>Sorted</h3>
          <select id="sortedBy">
            <option value="" key="">by default</option>
          </select>
        </div>
      </div>
      <ProductsContainer products_data={all_products}/>
    </section>
  )
}

export default AllProductsPage;