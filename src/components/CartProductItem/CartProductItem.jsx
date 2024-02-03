import React from "react";
import s from "./CartProductItem.module.css";
import { useDispatch } from "react-redux";
import { increment } from "../../store/slice/cartSlice";
import { dicrement } from "../../store/slice/cartSlice";
import { deleteFromCart } from "../../store/slice/cartSlice";

const CartProductItem = ({ id, image, discont_price, price, title, count }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.product_cart_item}>
      <img src={image} alt={title} />
      <div className={s.group_titleAndCounter}>
        <h3 className={s.product_title}>{title}</h3>
        <div className={s.counter_group}>
          <div
            onClick={() => dispatch(dicrement(id))}
            className={s.dicrement_btn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 2"
              fill="none"
            >
              <rect width="18" height="2" fill="#2D2D2D" />
            </svg>
          </div>
          <p className={s.counter}>{count}</p>
          <div
            onClick={() => dispatch(increment(id))}
            className={s.increment_btn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <rect y="8" width="18" height="2" fill="#2D2D2D" />
              <rect
                x="8"
                y="18"
                width="18"
                height="2"
                transform="rotate(-90 8 18)"
                fill="#2D2D2D"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className={s.price}>
        <p className={s.actual_price}>
          {discont_price ? discont_price : price}
          <span>$</span>
        </p>
        {discont_price ? (
          <p className={s.old_price}>
            {price}
            <span>$</span>
          </p>
        ) : (
          ""
        )}
      </div>
      <div
        onClick={() => dispatch(deleteFromCart(id))}
        className={s.close_icon}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="icons8-multiply 1">
            <path
              id="Vector"
              d="M8.64355 7.80005L7.7998 8.6438L14.1748 15L7.7998 21.3563L8.64355 22.2001L15.0373 15.8438L21.4123 22.2001L22.2561 21.3563L15.8811 15L22.2561 8.6438L21.4123 7.80005L15.0373 14.1563L8.64355 7.80005Z"
              fill="#2D2D2D"
            />
          </g>
        </svg>
      </div>
    </li>
  );
};

export default CartProductItem;
