import { createSlice } from "@reduxjs/toolkit/react";

interface Active {
    user: {
        chatId: string,
        name: string,
        image: string
    }
}

const INITIAL_STATE: Active = {
    user: {
        chatId: "",
        name: "",
        image: ""
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