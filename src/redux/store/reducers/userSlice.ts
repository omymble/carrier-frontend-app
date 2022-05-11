import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreators";
import {IUser} from "../models/IUser";


export interface UserState {
    users: IUser[]
    isLoadingUsers: boolean;
    errorUsers: string;
}

const initialState: UserState = {
    users: [],
    isLoadingUsers: false,
    errorUsers: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload
            state.isLoadingUsers = false
            state.errorUsers = ''
        },
        [fetchUsers.pending.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoadingUsers = true
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<any>) => {
            state.isLoadingUsers = false
            state.errorUsers = action.payload
        },
    }
})

export default userSlice.reducer