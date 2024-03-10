import React from "react";
import s from "./OrderDetailsForm.module.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { sendOrder } from "../../requests/order_req";
import { clearCart } from "../../store/slice/cartSlice";

const OrderDetailsForm = ({ total_price, cart_products, orderSent }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const phoneRegister = register("phone", {
    required: "*Phone number is required",
    pattern: {
      value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      message:
        "*incorrect format, write your phone number like this: +491602484373",
    },
  });

  const submit = (data) => {
    dispatch(sendOrder({ order: cart_products, ...data }));
    console.log(cart_products);
    console.log(data);
    orderSent(true);
    dispatch(clearCart());
    reset();
  };
  return (
    <form className={s.form} onSubmit={handleSubmit(submit)}>
      <h2>Order details</h2>
      <div className={s.total_price_container}>
        <p className={s.total_title}>Total</p>
        <p className={s.total_price}>
          {total_price}
          <span>$</span>
        </p>
      </div>
      <input
        type="tel"
        placeholder="Phone number"
        name="phone"
        {...phoneRegister}
      />
      {errors.phone && <p className={s.error_msg}>{errors.phone.message}</p>}
      <button className={s.send_order_btn}>Order</button>
    </form>
  );
};

export default OrderDetailsForm;
