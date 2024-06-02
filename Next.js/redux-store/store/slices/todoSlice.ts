import { createSlice } from "@reduxjs/toolkit";


let intialState = {
    email:"naveed@gmail.com",
    isLoading: false,
    todos: [
        {
            id: 1,
            title: "Teach Redux",
            description: "Perpare for class",
            isComplete: false,
        }
    ],

}

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: intialState,
    reducers: {
        createNewTodo: (state, action) => {
            console.log("createNewTodo action called");
            console.log("action", action);
            state.todos = [...state.todos, action.payload]
        }
    },
    // extraReducers:{},
})

export const {createNewTodo} = todoSlice.actions;
export default todoSlice.reducer;

