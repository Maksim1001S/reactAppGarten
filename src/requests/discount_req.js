import axios from "axios";
import { base_url } from "./baseUrl";

export const sendDiscount = async (phoneNum) => {
    const res = await axios.post(`${base_url}/sale/send`, phoneNum);
    console.log(res.data);
    return res.data;
}