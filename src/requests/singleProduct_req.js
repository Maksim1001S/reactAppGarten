import { createAsyncThunk } from "@reduxjs/toolkit";

import { db } from "../firebaseConfig.js";
import { ref, get } from "firebase/database";

export const getSingleProduct = createAsyncThunk(
  "singleProduct/getSingleProduct",
  async (id) => {
    const dbRef = ref(db, `products/${id}`);

    try {
      const snapshot = await get(dbRef);

      const data = snapshot.val();

      return data;
    } catch (error) {
      console.error("Error fetching data from Firebase:", error);
      throw error;
    }
  }
);
