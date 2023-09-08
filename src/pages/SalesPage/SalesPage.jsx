import React from 'react'
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer'
import { useSelector } from 'react-redux'
import s from "./SalesPage.module.css"
import Sort from '../../components/Sort/Sort'

const SalesPage = () => {
  const { disProducts } = useSelector(state => state.disProducts)
  return (
    <section className={s.section}>
      <h2 className={s.title}>Products with sale</h2>
      <Sort />
      <ProductsContainer products_data={disProducts}/>
    </section>
  )
}

export default SalesPage