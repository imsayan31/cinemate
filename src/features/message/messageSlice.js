import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = null;

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        showSuccessMessage: (state, action) => {
            toast.success(action.payload);
            return { type: 'success', text: action.payload};
        },
        showErrorMessage: (state, action) => {
            toast.error(action.payload);
            return { type: 'error', text: action.payload};
        },
        showWarningMessage: (state, action) => {
            return { type: 'warning', text: action.payload};
        },
    }
});

export const { showSuccessMessage, showErrorMessage, showWarningMessage } = messageSlice.actions;
export default messageSlice.reducer;