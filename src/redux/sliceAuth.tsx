import { createSlice } from "@reduxjs/toolkit/react";

interface Auth {
    authData: object
}

const INITIAL_STATE: Auth = {
    authData: {}
}

const sliceAuth = createSlice({
    name: "authData",
    initialState: INITIAL_STATE,
    reducers: {
        userAuth(state, action) {
            return {...state, authData: action.payload}
        }
        },
    },
)

export default sliceAuth.reducer
export const {userAuth} = sliceAuth.actions;

export const chatAuth = (state: any) => {
    return state.chatAuth as Auth
}