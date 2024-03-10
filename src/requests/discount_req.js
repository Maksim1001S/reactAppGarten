import { push, ref, set } from "firebase/database";
import { db } from "../firebaseConfig";

export const sendDiscount = async (phoneNum) => {
  try {
    const orderRef = push(ref(db, "sendDiscount"));
    await set(orderRef, phoneNum);
    console.log("Discount has benn successfully sent: ", phoneNum);
    return { phoneNum, id: orderRef.key };
  } catch (error) {
    console.error("anything went wrong in time sending: ", error);
    throw error;
  }
};
