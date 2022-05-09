import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import driversReducer from "./reducers/driversSlice"
import passengersReducer from "./reducers/passengersSlice"

let rootReducer = combineReducers({
    driversReducer,
    passengersReducer
})

export const setUpStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore["dispatch"]
// export type AppDispatch = typeof store.dispatch