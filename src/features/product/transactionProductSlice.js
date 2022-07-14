import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const initialState = {
    productId: 0,
    productName: "",
    description: "",
    price: 0,
    categoryName: "",
    addedBy: "",
    userName: "",
    city: "",
    photoProfile: "",
    productImages: [],
    sold: false,
    published: false,
    isLoadingDetailProduct: false,
    isLoadingPublishingProduct: false,
};

export const getProductDetails = createAsyncThunk(
    "/api/v1/home/product_id",
    async (productId, thunkAPI) => {
        let url = `${process.env.REACT_APP_BASE_URL}/api/v1/home/${productId}`;

        try {
            const resp = await axios.get(url);

            const { data } = resp;
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
export const publishProduct = createAsyncThunk(
    "/api/v1/products/publish",
    async (productId, thunkAPI) => {
        const { accessToken } = thunkAPI.getState().user;
        let url = `${process.env.REACT_APP_BASE_URL}/api/v1/products/publish`;

        const payload = { productId };
        try {
            const resp = await axios.put(url, payload, {
                headers: {
                    Authorization: "Bearer " + accessToken,
                    "Content-Type": "multipart/form-data",
                },
            });

            const { data } = resp;

            // OK / NOT_ACCEPTABLE
            if (data.httpStatus === "OK") return data;
            else {
                toast.dismiss();
                toast.error(data.message);
                return thunkAPI.rejectWithValue();
            }
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

const transactionProductSlice = createSlice({
    name: "transactionProduct",
    initialState,
    reducers: {},
    extraReducers: {
        [getProductDetails.pending]: (state) => {
            state.isLoadingDetailProduct = true;
        },
        [getProductDetails.fulfilled]: (state, { payload }) => {
            const {
                productId,
                productName,
                description,
                price,
                categoryName,
                addedBy,
                userName,
                city,
                photoProfile,
                productImages,
                sold,
                published,
            } = payload;

            state.productId = productId;
            state.productName = productName;
            state.description = description;
            state.price = price;
            state.categoryName = categoryName;
            state.addedBy = addedBy;
            state.userName = userName;
            state.city = city;
            state.photoProfile = photoProfile;
            state.productImages = productImages;
            state.sold = sold;
            state.published = published;
            state.isLoadingDetailProduct = false;
        },
        [getProductDetails.rejected]: (state, action) => {
            state.isLoadingDetailProduct = false;
        },
        [publishProduct.pending]: (state) => {
            state.isLoadingPublishingProduct = true;
        },
        [publishProduct.fulfilled]: (state, { payload }) => {
            state.published = true;
            state.isLoadingPublishingProduct = false;
        },
        [publishProduct.rejected]: (state, action) => {
            state.isLoadingPublishingProduct = false;
        },
    },
});

export default transactionProductSlice.reducer;