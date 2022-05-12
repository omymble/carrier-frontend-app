import {IFoundDriver} from "../models/IFoundDriver";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchFoundDrivers} from "./ActionCreators";

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
    },
    extraReducers: {
        [fetchFoundDrivers.fulfilled.type]: (state, action: PayloadAction<IFoundDriver[]>) => {
            state.foundDrivers = action.payload
            state.isLoading = false
            state.error = ''
        },
        [fetchFoundDrivers.pending.type]: (state, action: PayloadAction<IFoundDriver[]>) => {
            state.isLoading = true
        },
        [fetchFoundDrivers.rejected.type]: (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export default foundDriversSlice.reducer