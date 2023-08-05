import React from 'react'
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer'
import { useSelector } from 'react-redux'
import s from "./SalesPage.module.css"

const SalesPage = () => {
  const { disProducts } = useSelector(state => state.disProducts)
  return (
    <section className={s.section}>
      <h2 className={s.title}>Products with sale</h2>
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
      <ProductsContainer products_data={disProducts}/>
    </section>
  )
}

export default SalesPage