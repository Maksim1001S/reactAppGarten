import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsByCategory = createAsyncThunk(
    "productsByCategory/getProductsByCategory",
    async (category) => {
        const res = await axios.get(`https://gartenservice.onrender.com/categories/${category}`)
        return res.data
    }
)