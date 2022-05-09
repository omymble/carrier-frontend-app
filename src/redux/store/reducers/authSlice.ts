import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IAuth {
    telInput: string;
    userId: number | null;
    isAuth: boolean;
}

const initialState: IAuth = {
    telInput: '+79991111111',
    userId: null,
    isAuth: false,
}

export const authSlice = createSlice({
    name: 'passengers',
    initialState,
    reducers: {
        login(state, action: PayloadAction<IAuth>) {
            state.
        },
        updateTelInput(state, action: PayloadAction<string>) {
            state.telInput = action.payload
        }
    }
})

export const {addDriver, updateTelInput} = driversSlice.actions
export default driversSlice.reducer