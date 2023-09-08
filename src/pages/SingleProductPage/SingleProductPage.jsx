import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../../requests/singleProduct_req'
import { useParams } from 'react-router-dom'
import Preloader from '../../components/Preloader/Preloader'
import s from "./SingleProductPage.module.css"
import { addToCart } from '../../store/slice/cartSlice'

const SingleProductPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const {singleProduct, status} = useSelector(state => state.singleProduct)
  useEffect(() => {
    dispatch(getSingleProduct(id))
  }, [id])
  if (status === "succeeded") {
    const {description, id, image, discont_price, price, title} = singleProduct;
    return (
      <section className={s.singleProduct_section}>
        <h2 className={s.product_title}>{title}</h2>
        <div className={s.container}>
          <img src={`https://gartenservice.onrender.com/${image}`} alt={title} />
          <div className={s.product_info}>
              <div className={s.price_info}>
                  <p className={s.actual_price}>{discont_price ? discont_price : price}<span>$</span></p>
                  {
                  discont_price
                  ? <p className={s.old_price}>{price}<span>$</span></p>
                  : ""
                  }
                  
                  {
                  discont_price 
                      ? <p className={s.discount}>-{Math.floor(((price - discont_price)/price)*100)}<span>%</span></p> 
                      : "" 
                  }
              </div>
              <div className={s.product_toCard_btn} onClick={() => dispatch(addToCart({id, image, discont_price, price, title}))}>To cart</div>
              <div className={s.dotted_line}></div>
              <h3 className={s.description_title}>Description</h3>
              <h4 className={s.description}>{description}</h4>
          </div>
        </div>
      </section>
    );
  }
  return(
    <Preloader />
  )
}

export default SingleProductPage