import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        logOut: (state, action) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },
        isUserLoggedIn: (state) => {
            return state.isAuthenticated;
        }
    }
});

export const { loginSuccess, logOut, isUserLoggedIn } = authSlice.actions;
export default authSlice.reducer;