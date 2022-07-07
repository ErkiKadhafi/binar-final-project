import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// check if user is already login
const userState = JSON.parse(localStorage.getItem("secondhand"))
    ? JSON.parse(localStorage.getItem("secondhand"))
    : {
          id: "",
          accessToken: "",
          fullName: "",
          email: "",
          type: "",
          addres: {},
          phoneNumber: "",
          imageUrl: "",
      };
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
            // delete data.id;

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
            // delete data.id;

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

export const updateProfile = createAsyncThunk(
    "/api/v1/users/profile-user",
    async (payload, thunkAPI) => {
        const { accessToken } = thunkAPI.getState().user;

        const url = `${process.env.REACT_APP_BASE_URL}/api/v1/users/profile-user`;
        try {
            const resp = await axios.put(url, payload, {
                headers: {
                    Authorization: "Bearer " + accessToken,
                    "Content-Type": "multipart/form-data",
                },
            });

            // remove id from response
            const data = resp.data.data;
            // delete data.id;

            let tempLocalstorage = JSON.parse(
                localStorage.getItem("secondhand")
            );
            tempLocalstorage.fullName = data.name;
            tempLocalstorage.address.street = data.street;
            tempLocalstorage.address.city = data.city;
            tempLocalstorage.phoneNumber = data.phoneNumber;

            // if the user change their avatar
            if (data.urlImage) tempLocalstorage.imageUrl = data.urlImage;

            // keep access token and user information on local storage
            localStorage.setItem(
                "secondhand",
                JSON.stringify(tempLocalstorage)
            );
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

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [login.pending]: (state) => {},
        [login.fulfilled]: (state, { payload }) => {
            state.isAuthenticated = true;
            state.id = payload.id;
            state.accessToken = payload.accessToken;
            state.fullName = payload.fullName;
            state.email = payload.email;
            state.type = payload.type;

            // because address is returned as null not empty obj
            if (payload.addres) state.address = payload.address;
            else state.addres = {};

            state.phoneNumber = payload.phoneNumber;
            state.imageUrl = payload.imageUrl;
        },
        [login.rejected]: (state, action) => {},
        [register.pending]: (state) => {},
        [register.fulfilled]: (state, { payload }) => {
            state.isAuthenticated = true;
            state.id = payload.id;
            state.accessToken = payload.accessToken;
            state.fullName = payload.fullName;
            state.email = payload.email;
            state.type = payload.type;

            // because address is returned as null not empty obj
            if (payload.addres) state.address = payload.address;
            else state.addres = {};

            state.address = payload.address;
            state.phoneNumber = payload.phoneNumber;
            state.imageUrl = payload.imageUrl;
        },
        [register.rejected]: (state, action) => {},
        [updateProfile.pending]: (state) => {},
        [updateProfile.fulfilled]: (state, { payload }) => {
            state.fullName = payload.name;
            state.address.city = payload.city;
            state.address.street = payload.street;
            state.phoneNumber = payload.phoneNumber;

            // if the user change their avatar
            if (payload.urlImage) state.imageUrl = payload.urlImage;
        },
        [updateProfile.rejected]: (state, action) => {},
    },
});

export default userSlice.reducer;
