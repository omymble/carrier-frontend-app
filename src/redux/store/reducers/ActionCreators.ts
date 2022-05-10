import {AppDispatch} from "../store";
import axios from "axios";
import {IFoundDriver} from "../models/IFoundDriver";
import {foundDriversSlice} from "./foundDriversSlice";

// const URL = "../../../../public/data/driversData.json"

export const fetchDrivers = (URL: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(foundDriversSlice.actions.foundDriversFetching())
        const response = await axios.get<IFoundDriver[]>(URL)
        debugger
        dispatch(foundDriversSlice.actions.foundDriversFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(foundDriversSlice.actions.foundDriversFetchingError(e))
    }
}