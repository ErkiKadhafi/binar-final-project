import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    myOffers: [],
    isLoadingMyOffers: false,
};

export const getMyOffers = createAsyncThunk(
    "/api/v1/offers/seller/offer/product_id",
    async (productId, thunkAPI) => {
        const { accessToken } = thunkAPI.getState().user;
        let url = `${process.env.REACT_APP_BASE_URL}/api/v1/offers/seller/offer/${productId}`;

        try {
            const resp = await axios.get(url, {
                headers: {
                    Authorization: "Bearer " + accessToken,
                    "Content-Type": "multipart/form-data",
                },
            });

            const { data } = resp.data;
            console.log(data);

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
export const rejectOffer = createAsyncThunk(
    "/api/v1/offers/seller/status",
    async (payload, thunkAPI) => {
        const { accessToken } = thunkAPI.getState().user;
        let url = `${process.env.REACT_APP_BASE_URL}/api/v1/offers/seller/status`;

        try {
            const resp = await axios.put(url, payload, {
                headers: {
                    Authorization: "Bearer " + accessToken,
                    "Content-Type": "multipart/form-data",
                },
            });

            const { data } = resp;
            data.offerId = parseInt(payload.offerId);
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
export const acceptOffer = createAsyncThunk(
    "/api/v1/offers/seller/status",
    async (payload, thunkAPI) => {
        const { accessToken } = thunkAPI.getState().user;
        let url = `${process.env.REACT_APP_BASE_URL}/api/v1/offers/seller/status`;

        try {
            const resp = await axios.put(url, payload, {
                headers: {
                    Authorization: "Bearer " + accessToken,
                    "Content-Type": "multipart/form-data",
                },
            });

            const { data } = resp;
            data.offerId = parseInt(payload.offerId);
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

const myOffersSlice = createSlice({
    name: "myOffers",
    initialState,
    reducers: {},
    extraReducers: {
        [getMyOffers.pending]: (state) => {
            state.isLoadingMyOffers = true;
        },
        [getMyOffers.fulfilled]: (state, { payload }) => {
            if (payload) {
                state.myOffers = payload;
            }
            state.isLoadingMyOffers = false;
        },
        [getMyOffers.rejected]: (state, action) => {
            state.isLoadingMyOffers = false;
        },
        [rejectOffer.pending]: (state, { payload }) => {},
        [rejectOffer.fulfilled]: (state, { payload }) => {
            const updatedState = state.myOffers.find(
                (offer) => offer.offerId === payload.offerId
            );
            updatedState.statusOffer = "Rejected";
        },
        [rejectOffer.rejected]: (state, { payload }) => {},
        [acceptOffer.pending]: (state, { payload }) => {},
        [acceptOffer.fulfilled]: (state, { payload }) => {
            const updatedState = state.myOffers.find(
                (offer) => offer.offerId === payload.offerId
            );
            updatedState.statusOffer = "Accepted";
        },
        [acceptOffer.rejected]: (state, { payload }) => {},
    },
});

export default myOffersSlice.reducer;
