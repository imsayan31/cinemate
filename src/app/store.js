import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "../features/message/messageSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
    reducer: {
        message: messageReducer,
        auth: authReducer,
    }
});