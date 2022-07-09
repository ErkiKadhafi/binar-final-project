import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const productDetail = {
    productName : "",
    description : "",
    price       : "",
    categoryId  : "",
    image       : null,
}
const isAuthenticated = JSON.parse(localStorage.getItem("secondhand"))
    ? true
    : false;

const initialState = {
    isAuthenticated,
    ...productDetail
};

export const addProduct = createAsyncThunk(
    "api/v1/product/add",
    async (payload) => {
        const url = `${process.env.REACT_APP_BASE_URL}/api/v1/products/add`
        try {
            const res = await axios.post(url, payload)

            const data = res.data
            localStorage.setItem("secondhand", JSON.stringify(data));
            return data
        } catch (error) {
           
        }
    }
)

const productSlice = createSlice({
    name : 'addProduct',
    initialState,
    reducers: {},
    extraReducers: {
        [addProduct.pending]: (state) => {},
        [addProduct.fulfilled]: (state, { payload }) => {
            state.isAuthenticated = true;
            state.accessToken = payload.accessToken;
            state.product = payload.productName;
        },
        [addProduct.rejected]: (state, action) => {},
    }
})

export default productSlice.reducer