import { configureStore } from "@reduxjs/toolkit";
import calculator from './calculatorSlice'
import construction from './constructionSlice'

export const store = configureStore({
    reducer: {
        calculator,
        construction
    }
})