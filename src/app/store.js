import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo"
export default configureStore({
    reducer :{
        todo:todoSlice
    }
})