import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async () => {
        const res = await axios.get("https://gartenservice.onrender.com/products/all")
        return res.data
    }
)