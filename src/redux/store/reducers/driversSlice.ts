import {IDriver} from "../models/IDriver";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface DriversState {
    telInput: string;
    drivers: Array<IDriver>;
    isLoading: boolean;
    error: string;
}

const initialState: DriversState = {
    telInput: '+79991111111',
    drivers: [],
    isLoading: false,
    error: '',
}

export const driversSlice = createSlice({
    name: 'passengers',
    initialState,
    reducers: {
        addDriver(state, action: PayloadAction<IDriver>) {
            state.drivers.push(action.payload)
        },
        updateTelInput(state, action: PayloadAction<string>) {
            state.telInput = action.payload
        }
    }
})

export const {addDriver, updateTelInput} = driversSlice.actions
export default driversSlice.reducer