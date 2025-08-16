import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;   // Toggle the menu state
        }
    }
})


export default appSlice.reducer;  // Export the reducer
export const { toggleMenu } = appSlice.actions;  // Export the action creator