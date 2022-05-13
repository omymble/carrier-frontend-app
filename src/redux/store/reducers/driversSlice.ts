import {IDriver} from "../models/IDriver";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IDriverTrip {
    driverTrip: IDriver;
    isLoading: boolean;
    error: string;
}

const initialState: IDriverTrip = {
    driverTrip: {
        name: '',
        telephone: '',
        emptySeats: 0,
        startTime: 0,
        from: {longitude: 0, latitude: 0},
        to: {longitude: 0, latitude: 0},
    },
    isLoading: false,
    error: '',
}

export const driversSlice = createSlice({
    name: 'driver',
    initialState,
    reducers: {
        addDriver(state, action: PayloadAction<IDriver>) {
            state.driverTrip = action.payload
        }
    }
})

export const {addDriver} = driversSlice.actions
export default driversSlice.reducer