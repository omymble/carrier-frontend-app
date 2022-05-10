import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAuth} from "../models/IAuth";

const initialState: IAuth = {
    telephone: '',
    isSignIn: false
}

export const authSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        signIn(state, action: PayloadAction<string>) {
            state.telephone = action.payload
            state.isSignIn = true
        },
        signOut(state, action: PayloadAction<string>) {
            state.telephone = ''
            state.isSignIn = false
        }
    }
})

export const {signIn, signOut} = authSlice.actions
export default authSlice.reducer