import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendOrder = createAsyncThunk(
    "order/sendOrder",
    async (order) => {
        const res = await axios.post("https://gartenservice.onrender.com/order/send", order);
        console.log(res.data);
        return res.data;
    }
)