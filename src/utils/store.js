import { configureStore } from "@reduxjs/toolkit";
import app from "./appSlice";

const store = configureStore({
    reducer: {
        app: app,
    }
})

export default store;