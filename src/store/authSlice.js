import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    userData: null,
    loading: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },
        login : (state, action) => {
            state.isAuthenticated = true;
            state.userData = action.payload.userData;
            state.loading = false;
        },
        logout: (state, action) => {
            state.isAuthenticated = false;
            state.userData = null;
        }
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;