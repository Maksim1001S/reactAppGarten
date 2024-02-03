import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "./baseUrl";
import { db } from "../firebaseConfig.js";
import { ref, get } from "firebase/database";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const dbRef = ref(db, "products");

    try {
      const snapshot = await get(dbRef);

      const data = snapshot.val();
      const productsArray = Object.keys(data).map((key) => ({
        ...data[key],
        id: key,
      }));

      return productsArray;
    } catch (error) {
      console.error("Error fetching data from Firebase:", error);
      throw error;
    }
  }
);
