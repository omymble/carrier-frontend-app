import axios from "axios";
import {IFoundPassenger} from "../models/IFoundPassenger";
import {IFoundDriver} from "../models/IFoundDriver";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {IUser} from "../models/IUser";

const URL = "https://raw.githubusercontent.com/omymble/demo/master/db.json" //работает

export const fetchUsers = createAsyncThunk(
    'user/fetchAllUsers',
    async(_, thunkAPI) => {
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        return response.data
    }
)

export const fetchFoundDrivers = createAsyncThunk(
    'foundDrivers/fetchFoundDrivers',
    async (_ , thunkAPI) => {
        try {
            const response = await axios.get<IFoundDriver[]>(URL)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue("Error with loading data")
        }
    }
)

export const fetchFoundPassengers = createAsyncThunk(
    'foundPassengers/fetchFoundPassengers',
    async (_ , thunkAPI) => {
        try {
            const response = await axios.get<IFoundPassenger[]>(URL)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue("Error with loading data")
        }
    }
)