import React, { useState } from "react";
import s from "./PopupSent.module.css";

const PopupSent = () => {
  const [isClose, setIsClose] = useState(false);
  return !isClose ? (
    <div className={s.popup_Container}>
      <div className={s.popup}>
        <h1>Congratulations!</h1>
        <p className={s.popup_text}>
          Your order has been successfully placed on the website. <br></br>
          <br></br>
          A manager will contact you shortly to confirm your order.
        </p>
        <div
          onClick={() => {
            setIsClose(true);
          }}
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
                fill="#fff"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  ) : null;
};

export default PopupSent;
