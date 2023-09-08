import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSingleProduct = createAsyncThunk(
    "singleProduct/getSingleProduct",
    async (id) => {
        const res = await axios.get(`https://gartenservice.onrender.com/products/${id}`)
        return res.data[0]
    }
)