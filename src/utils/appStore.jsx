import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './searchSlice'

const appStore = configureStore({
    reducer: searchReducer
})

export default appStore;