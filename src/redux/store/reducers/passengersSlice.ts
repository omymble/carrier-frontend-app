import {IPassenger} from "../models/IPassenger";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface PassengersState {
    telInput: string;
    passengers: Array<IPassenger>;
    isLoading: boolean;
    error: string;
}

const initialState: PassengersState = {
    telInput: '+79990000000',
    passengers: [],
    isLoading: false,
    error: '',
}

export const passengersSlice = createSlice({
    name: 'passengers',
    initialState,
    reducers: {
        addPassenger(state, action: PayloadAction<IPassenger>) {
            state.passengers.push(action.payload)
        },
        updateTelInput(state, action: PayloadAction<string>) {
            state.telInput = action.payload
        }
    }
})

export const {addPassenger, updateTelInput} = passengersSlice.actions
export default passengersSlice.reducer