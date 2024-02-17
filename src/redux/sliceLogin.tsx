import { createSlice } from "@reduxjs/toolkit/react";

interface Auth {
    userLogged: object
}

const INITIAL_STATE: Auth = {
    userLogged: {
        id: "",
        name: "",
        avatar: ""
    }
}

const sliceLogin = createSlice({
    name: "userLogged",
    initialState: INITIAL_STATE,
    reducers: {
        setLoginData(state, action) {
            return {...state, userLogged: action.payload}
        }
        },
    },
)

export default sliceLogin.reducer
export const {setLoginData} = sliceLogin.actions;

export const loginData = (state: any) => {
    return state.loginReducer as Auth
}