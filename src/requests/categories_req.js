import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, ref } from "firebase/database";
import { db } from "../firebaseConfig";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const snapshot = await get(ref(db, "categories"));
    const data = snapshot.val();
    data.shift();
    return data;
  }
);
