import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPassenger} from "../models/IPassenger";

export interface IPassengerTrip {
    passenger: IPassenger;
    isLoading: boolean;
    error: string;
}

const initialState: IPassengerTrip = {
    passenger: {
        name: '',
        id: '',
        time: 0,
        from: {longitude: 0, latitude: 0},
        to: {longitude: 0, latitude: 0},
    },
    isLoading: false,
    error: '',
}

export const passengersSlice = createSlice({
    name: 'passenger',
    initialState,
    reducers: {
        addPassenger(state, action: PayloadAction<IPassenger>) {
            state.passenger = action.payload
        },
        deletePassenger(state, action: PayloadAction<string>) {
            state.passenger = {...initialState.passenger}
        }
    }
})

export const {addPassenger, deletePassenger} = passengersSlice.actions
export default passengersSlice.reducer