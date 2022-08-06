import { createSlice } from "@reduxjs/toolkit"
export const todoSlice = createSlice({
    name:"todo",
    initialState:{
        count:0,
        todos:[]
    },
    reducers:{
        addTodo:(state,action) =>{
            const newTodo ={
                text:action.payload,
                id:Math.random() * 100,
            }
        
        state.todos.push(newTodo)
        state.count += 1
    },
        removeTodo:(state,action)=>
        {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
            state.count -= 1
        }
    }
})
export const { addTodo,removeTodo } = todoSlice.actions;
export default todoSlice.reducer;