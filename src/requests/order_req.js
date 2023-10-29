import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "./baseUrl";

export const sendOrder = createAsyncThunk(
    "order/sendOrder",
    async (order) => {
        const res = await axios.post(`${base_url}/order/send`, order);
        console.log(res.data);
        return res.data;
    }
)