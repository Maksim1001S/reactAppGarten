import axios from "axios";

export const sendDiscount = async (phoneNum) => {
    const res = await axios.post("https://gartenservice.onrender.com/sale/send", phoneNum);
    console.log(res.data);
    return res.data;
}