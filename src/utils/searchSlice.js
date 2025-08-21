import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "serach",
    initialState: {},
    reducers:{
        cacheSearchResult: (state, action) => {
            state = Object.assign(state, action.payload)
        }
    }
})

export default searchSlice.reducer;
export const {cacheSearchResult } = searchSlice.actions;