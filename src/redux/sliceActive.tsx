import { createSlice } from "@reduxjs/toolkit/react";

interface Active {
    user: object
}

const INITIAL_STATE: Active = {
    user: {}
}

const sliceActive = createSlice({
    name: "activate",
    initialState: INITIAL_STATE,
    reducers: {
        enable(state, action) {
            return {...state, user: action.payload}
        }
        },
    },
)





export default sliceActive.reducer
export const {enable} = sliceActive.actions;

export const chatActive = ( state: any) => {
    return state.chatReducer as Active
}