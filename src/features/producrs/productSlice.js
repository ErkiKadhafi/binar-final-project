import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    totalProducts: 0,
    totalPages: 1,
    currentPage: 1,
    products: [],
    isLoadingAllProducts: false,
};

export const getAllProducts = createAsyncThunk(
    "/api/v1/home",
    async (queryString, thunkAPI) => {
        let url = `${process.env.REACT_APP_BASE_URL}/api/v1/home${queryString}`;
        console.log(url)
        try {
            const resp = await axios.get(url);

            const data = resp.data;
            // console.log(data);

            return data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            toast.dismiss();
            toast.error(message);
            return thunkAPI.rejectWithValue();
        }
    }
);

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllProducts.pending]: (state) => {
            state.isLoadingAllProducts = true;
        },
        [getAllProducts.fulfilled]: (state, { payload }) => {
            const { totalProducts, totalPages, currentPage, products } =
                payload;
            state.totalPages = totalPages;
            state.totalProducts = totalProducts;
            state.currentPage = currentPage;
            state.products = products;
            state.isLoadingAllProducts = false;
        },
        [getAllProducts.rejected]: (state, action) => {
            state.isLoadingAllProducts = false;
        },
    },
});

export default productSlice.reducer;
