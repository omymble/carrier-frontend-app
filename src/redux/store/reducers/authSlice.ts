import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAuth} from "../models/IAuth";

const initialState: IAuth = {
    id: '',
    isAuth: false
}

export const authSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        signIn(state, action: PayloadAction<string>) {
            state.id = action.payload
            state.isAuth = true
        },
        signOut(state, action: PayloadAction<string>) {
            state.id = ''
            state.isAuth = false
        }
    }
})

export const {signIn, signOut} = authSlice.actions
export default authSlice.reducer