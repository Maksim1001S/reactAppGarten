import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "./baseUrl";

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async () => {
        const res = await axios.get(`${base_url}/products/all`)
        return res.data
    }
)