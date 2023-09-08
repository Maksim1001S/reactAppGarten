import React from 'react'
import s from "./ProductItem.module.css"
import AddToCartIcon from '../../icons/AddToCartIcon'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/slice/cartSlice'

const ProductItem = ({title, image, id, price, discont_price}) => {
    const dispatch = useDispatch()
  return (
    <li className={s.products_item}>
        <div className={s.overlay}>
            <div onClick={() => dispatch(addToCart({title, image, id, price, discont_price}))} className={s.add_to_cart_btn}>
                <AddToCartIcon />
                <p>Add to cart</p>
            </div>
        </div>
        <img src={`https://gartenservice.onrender.com${image}`} alt={title} />
        <Link to={`/products/${id}`}>
            <div className={s.item_info_container}>
                <div className={s.price_info}>
                    <p className={s.discount_price}>{discont_price ? discont_price : price}<span>$</span></p>
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
                <h3 className={s.item_title}>{title}</h3>
            </div>
        </Link>   
    </li>
  )
}

export default ProductItem