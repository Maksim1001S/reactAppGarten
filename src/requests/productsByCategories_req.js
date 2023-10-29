import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "./baseUrl";

export const getProductsByCategory = createAsyncThunk(
    "productsByCategory/getProductsByCategory",
    async (category) => {
        const res = await axios.get(`${base_url}/categories/${category}`)
        return res.data
    }
)