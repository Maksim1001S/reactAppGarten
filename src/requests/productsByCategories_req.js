import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebaseConfig.js";
import { ref, get, orderByChild, equalTo, query } from "firebase/database";

export const getProductsByCategory = createAsyncThunk(
  "productsByCategory/getProductsByCategory",
  async (category) => {
    try {
      const dbRef = ref(db, "products");
      const dbRefCategory = ref(db, `categories/${category}`);

      const snapshot = await get(
        query(dbRef, orderByChild("categoryId"), equalTo(Number(category)))
      );

      const snapshotCategory = await get(dbRefCategory);

      const data = snapshot.val();

      const productsArray = Object.keys(data).map((key) => ({
        ...data[key],
        id: key,
      }));
      const newData = {
        category: snapshotCategory.val().title,
        data: productsArray,
      };

      return newData;
    } catch (error) {
      console.error("Error while fetching products:", error);

      throw error;
    }
  }
);
