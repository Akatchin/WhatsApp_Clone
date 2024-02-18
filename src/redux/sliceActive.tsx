import { createSlice } from "@reduxjs/toolkit/react";

interface Active {
    user: {
        id: string,
        name: string,
        avatar: string
    }
}

const INITIAL_STATE: Active = {
    user: {
        id: "",
        name: "",
        avatar: ""
    }
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