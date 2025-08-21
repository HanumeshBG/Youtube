import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;   // Toggle the menu state
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;  // Close the menu
        }
    }
})


export default appSlice.reducer;  // Export the reducer
export const { toggleMenu, closeMenu } = appSlice.actions;  // Export the action creator