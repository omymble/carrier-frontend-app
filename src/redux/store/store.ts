import {combineReducers} from "redux"
import {configureStore} from "@reduxjs/toolkit"
import driversReducer from "./reducers/driversSlice"
import passengersReducer from "./reducers/passengersSlice"
import foundDriversReducer from "./reducers/foundDriversSlice"
import foundPassengersReducer from "./reducers/foundPassengersSlice"
import authReducer from "./reducers/authSlice"
import {queryAPI} from "../services/queryService"
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: 'root',
    storage
}

let rootReducer = combineReducers({
    authReducer,
    driversReducer,
    passengersReducer,
    foundDriversReducer,
    foundPassengersReducer,
    [queryAPI.reducerPath]: queryAPI.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
        {serializableCheck: {ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]}}
    ).concat(queryAPI.middleware)
})

export const setUpStore = () => {
    return store
}

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore["dispatch"]