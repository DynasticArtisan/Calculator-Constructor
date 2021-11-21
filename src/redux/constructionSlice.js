import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    constructionMode: true,
    layout: [],
    grabbed: null,

}

export const constructionSlice = createSlice({
    name: 'construction',
    initialState,
    reducers: {
       switchMode: (state) => {
           state.constructionMode = !state.constructionMode
       },
       removeElement: (state, action) => {
           state.layout.splice(action.payload, 1)
       },
       addElement: (state, action) => {
           state.layout.splice(action.payload, 0, state.grabbed);
       },
       grab: (state, action) => {
           state.grabbed = action.payload
       },

    } 
})

export const selectConstructionMode = (state) => state.construction.constructionMode;
export const selectLayout = (state) => state.construction.layout;
export const grabbed = (state) => state.construction.grabbed;

export const { switchMode, removeElement, addElement, grab,  } = constructionSlice.actions;

export default constructionSlice.reducer