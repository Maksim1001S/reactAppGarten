import { createAsyncThunk } from "@reduxjs/toolkit";
import { push, ref, set } from "firebase/database";
import { db } from "../firebaseConfig";

export const sendOrder = createAsyncThunk("order/sendOrder", async (order) => {
  try {
    order.order = order.order.map((item) => {
      const newItem = { ...item };
      if (newItem.discont_price === undefined) {
        delete newItem.discont_price;
      }
      return newItem;
    });

    const orderRef = push(ref(db, "orders"));
    await set(orderRef, order);
    console.log("order has benn successfully sent: ", order);
    return { ...order, id: orderRef.key };
  } catch (error) {
    console.error("anything went wrong order sending: ", error);
    throw error;
  }
});
