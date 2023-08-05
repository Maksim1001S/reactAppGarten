import axios from "axios"
import { load_categories } from "../store/slice/categorySlice";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getCategories = createAsyncThunk(
    "categories/getCategories",
    async () => {
        const res = await axios.get("https://gartenservice.onrender.com/categories/all");
        return res.data;
    }
);