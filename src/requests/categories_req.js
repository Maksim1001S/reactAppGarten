import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "./baseUrl";


export const getCategories = createAsyncThunk(
    "categories/getCategories",
    async () => {
        const res = await axios.get(`${base_url}/categories/all`);
        console.log(res.data);
        return res.data;
    }
);