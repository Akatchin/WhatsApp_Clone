import { configureStore } from "@reduxjs/toolkit";
import sliceActive from "./sliceActive";
import sliceAuth from "./sliceAuth";

const store = configureStore({
    reducer: {
        chatReducer: sliceActive,
        chatAuth: sliceAuth
    }
})

export default store; 