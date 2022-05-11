import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import driversReducer from "./reducers/driversSlice"
import passengersReducer from "./reducers/passengersSlice"
import foundDriversReducer from "./reducers/foundDriversSlice"
import authReducer from "./reducers/authSlice"
import userReducer from "./reducers/userSlice"
import {queryAPI} from "../services/queryService"

let rootReducer = combineReducers({
    driversReducer,
    passengersReducer,
    foundDriversReducer,
    authReducer,
    userReducer,
    // [postAPI.reducerPath]: postAPI.reducer,
    [queryAPI.reducerPath]: queryAPI.reducer
    // [foundPassengersServiceAPI.reducerPath]: foundPassengersServiceAPI.reducer
})

export const setUpStore = () => {
    return configureStore({
        reducer: rootReducer,
        // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware)
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(queryAPI.middleware)
        // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(foundPassengersServiceAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore["dispatch"]
// export type AppDispatch = typeof store.dispatch