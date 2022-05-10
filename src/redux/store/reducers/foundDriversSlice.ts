import {IFoundDriver} from "../models/IFoundDriver";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {axios} from "../../../index";

export interface DriversState {
    foundDrivers: Array<IFoundDriver>;
    isLoading: boolean;
    error: string;
}

const initialState: DriversState = {
    foundDrivers: [],
    isLoading: false,
    error: '',
}

export const foundDriversSlice = createSlice({
    name: 'foundDrivers',
    initialState,
    reducers: {
        setFoundDrivers(state, action: PayloadAction<Array<IFoundDriver>>) {
            state.foundDrivers.push(...action.payload)
        },
        addDriver(state, action: PayloadAction<IFoundDriver>) {
            state.foundDrivers.push(action.payload)
        },
        foundDriversFetching(state) {
            state.isLoading = true
        },
        foundDriversFetchingSuccess(state, action: PayloadAction<IFoundDriver[]>) {
            state.foundDrivers = action.payload
            state.isLoading = false
            state.error = ''
        },
        foundDriversFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export const {setFoundDrivers, addDriver} = foundDriversSlice.actions
export default foundDriversSlice.reducer