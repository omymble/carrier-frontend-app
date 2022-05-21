import {IDriver} from "../models/IDriver";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IDriverTrip {
    driver: IDriver;
    isLoading: boolean;
    error: string;
}

const initialState: IDriverTrip = {
    driver: {
        name: '',
        telephone: '',
        seats: 0,
        time: 0,
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
            state.driver = action.payload
        },
        deleteDriver(state, action: PayloadAction<string>) {
            state.driver = {...initialState.driver}
        }
    }
})

export const {addDriver, deleteDriver} = driversSlice.actions
export default driversSlice.reducer