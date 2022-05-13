import {IFoundDriver} from "../models/IFoundDriver";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IFoundDriversList {
    foundDrivers: Array<IFoundDriver>;
    isLoading: boolean;
    error: string;
}

const initialState: IFoundDriversList = {
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
        }
    }
})

export default foundDriversSlice.reducer
