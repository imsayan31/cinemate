import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "../features/message/messageSlice";
import authReducer from "../features/auth/authSlice";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
    reducer: {
        message: messageReducer,
        auth: authReducer,
        todo: todoReducer
    }
});