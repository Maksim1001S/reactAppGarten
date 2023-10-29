import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "./baseUrl";

export const getSingleProduct = createAsyncThunk(
    "singleProduct/getSingleProduct",
    async (id) => {
        const res = await axios.get(`${base_url}/products/${id}`)
        return res.data[0]
    }
)