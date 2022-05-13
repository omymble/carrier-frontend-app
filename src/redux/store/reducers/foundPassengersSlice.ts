import {IFoundPassenger} from "../models/IFoundPassenger";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IFoundPassengersList {
    foundPassengers: Array<IFoundPassenger>;
    isLoading: boolean;
    error: string;
}

const initialState: IFoundPassengersList = {
    foundPassengers: [],
    isLoading: false,
    error: '',
}

export const foundPassengersSlice = createSlice({
    name: 'foundDrivers',
    initialState,
    reducers: {
        setFoundPassengers(state, action: PayloadAction<Array<IFoundPassenger>>) {
            state.foundPassengers.push(...action.payload)
        },
        addPassenger(state, action: PayloadAction<IFoundPassenger>) {
            state.foundPassengers.push(action.payload)
        }
    }
})

export default foundPassengersSlice.reducer
