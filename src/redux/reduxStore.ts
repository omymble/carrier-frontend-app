import {combineReducers, createStore} from "redux";
import {driversReducer} from "./driversReducer";
import {passengersReducer} from "./passengersReducer";
import {StoreObject} from "../types";

let reducers = combineReducers({
    driversData: driversReducer,
    passengersData: passengersReducer
})

let store: StoreObject = createStore(reducers)

export {store}