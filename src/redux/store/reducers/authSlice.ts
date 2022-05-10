import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAuth} from "../models/IAuth";

const initialState: IAuth = {
    telephone: '',
    isAuth: false
}

export const authSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        signIn(state, action: PayloadAction<string>) {
            state.telephone = action.payload
            state.isAuth = true
        },
        signOut(state, action: PayloadAction<string>) {
            state.telephone = ''
            state.isAuth = false
        }
    }
})

export const {signIn, signOut} = authSlice.actions
export default authSlice.reducer