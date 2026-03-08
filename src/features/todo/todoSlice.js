import { createSlice } from "@reduxjs/toolkit";

export const initialState = [];

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        },
        markComplete: (state, action) => {
            state.filter(todo => todo.id === action.payload)[0].status = 'completed';
        },
    }
});

export const {addTodo, deleteTodo, markComplete} = todoSlice.actions;
export default todoSlice.reducer;