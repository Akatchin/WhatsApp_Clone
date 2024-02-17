import { configureStore } from "@reduxjs/toolkit";
import sliceActive from "./sliceActive";
import sliceLogin from "./sliceLogin";

const store = configureStore({
    reducer: {
        chatReducer: sliceActive,
        loginReducer: sliceLogin
    }
})

export default store; 