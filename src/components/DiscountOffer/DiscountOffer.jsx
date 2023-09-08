import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import s from "./DiscountOffer.module.css"
import ProductsContainer from '../ProductsContainer/ProductsContainer';

const DiscountOffer = () => {
    const {disProducts} = useSelector(state => state.disProducts)
    const discountOfferProducts = disProducts.slice(0, 3)
   
  return (
    <section className={s.section} >
        <div className={s.title}>
            <h2 className={s.title_name}>Sale</h2>
            <Link className={s.title_button} to="/sales">all sales</Link>
        </div>
        <ProductsContainer page_container={"sale_offer_container"} products_data={discountOfferProducts}/>
    </section>
  )
}

export default DiscountOffer