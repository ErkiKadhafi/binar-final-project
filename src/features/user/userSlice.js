import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// check if user is already login
const userState = JSON.parse(localStorage.getItem("secondhand"))
    ? JSON.parse(localStorage.getItem("secondhand"))
    : { accessToken: "", email: "", roles: [], type: "" };
const isAuthenticated = JSON.parse(localStorage.getItem("secondhand"))
    ? true
    : false;

// initial state of user
const initialState = {
    isAuthenticated,
    ...userState,
};

export const login = createAsyncThunk(
    "/api/v1/login",
    async (payload, thunkAPI) => {
        const url = `${process.env.REACT_APP_BASE_URL}/api/v1/auth/login`;
        try {
            const resp = await axios.post(url, payload);

            // remove id from response
            const data = resp.data;
            delete data.id;

            // keep access token and user information on local storage
            localStorage.setItem("secondhand", JSON.stringify(data));

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

export const register = createAsyncThunk(
    "/api/v1/login",
    async (payload, thunkAPI) => {
        const url = `${process.env.REACT_APP_BASE_URL}/api/v1/auth/register`;
        try {
            const resp = await axios.post(url, payload);

            // remove id from response
            const data = resp.data;
            delete data.id;

            // keep access token and user information on local storage
            localStorage.setItem("secondhand", JSON.stringify(data));

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

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [login.pending]: (state) => {},
        [login.fulfilled]: (state, { payload }) => {
            state.isAuthenticated = true;
            state.accessToken = payload.accessToken;
            state.email = payload.email;
            state.roles = payload.roles;
            state.type = payload.type;
        },
        [login.rejected]: (state, action) => {},
        [register.pending]: (state) => {},
        [register.fulfilled]: (state, { payload }) => {
            state.isAuthenticated = true;
            state.accessToken = payload.accessToken;
            state.email = payload.email;
            state.roles = payload.roles;
            state.type = payload.type;
        },
        [register.rejected]: (state, action) => {},
    },
});

export default userSlice.reducer;
