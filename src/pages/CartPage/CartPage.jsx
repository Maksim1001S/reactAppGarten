import React from 'react'
import s from "./CartPage.module.css"
import { Link } from 'react-router-dom'
import ArrowIcon from '../../icons/ArrowIcon'
import { useSelector } from 'react-redux'
import CartProductItem from '../../components/CartProductItem/CartProductItem'
import OrderDetailsForm from '../../components/OrderDetailsForm/OrderDetailsForm'

const CartPage = () => {
  const cart = useSelector(state => state.cart.cart)
  console.log(cart);
  const total_price = cart.reduce((acc, {price, count, discont_price}) => acc + (discont_price ? discont_price : price)*count, 0).toFixed(2)
  return (
    <section className={s.cart_section}>
      <h2 className={s.cart_section_title}>Shopping cart</h2>
      <div className={s.cart_container}>
        <div className={s.cart_products_container}>
          <div className={s.linkToBack}><Link to="/products/all">Back to the store<ArrowIcon /></Link></div>
          <ul className={s.products_cart}>
            {
              cart.map((el) => <CartProductItem key={el.id} {...el}/>)
            }
          </ul>
        </div>
        <OrderDetailsForm cart_products={cart} total_price={total_price}/>
      </div>
      
      
    </section>
  )
}

export default CartPage