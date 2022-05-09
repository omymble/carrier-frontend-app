import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'
import {PassengerObject, PassengersDataObject} from "../../types";

// Define a type for the slice state
/*interface passengerState {
    value: number
}*/

// Define the initial state using that type
const initialState: PassengersDataObject = {
    telInput: '89093337772',
    passengers: [
        {name: 'Илья Морозов',
            telephone: '+79432735838',
            startTime: '15:30',
            pointFrom: {longitude: 34.8573487, latitude: 67.24534},
            pointTo: {longitude: 34.8573487, latitude: 67.24534}
        },
        {name: 'Ева Савельева',
            telephone: '+78765423',
            startTime: '19:30',
            pointFrom: {longitude: 34.8573487, latitude: 67.24534},
            pointTo: {longitude: 34.8573487, latitude: 67.24534}
        },
        {name: 'Олег Васильев',
            telephone: '+78674537575',
            startTime: '12:00',
            pointFrom: {longitude: 34.8573487, latitude: 67.24534},
            pointTo: {longitude: 34.8573487, latitude: 67.24534}
        },
        {name: 'Илья Морозов',
            telephone: '+79432735838',
            startTime: '15:30',
            pointFrom: {longitude: 34.8573487, latitude: 67.24534},
            pointTo: {longitude: 34.8573487, latitude: 67.24534}
        }
    ]
}

export const passengersSlice = createSlice({
    name: 'passengers',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setPassengers: (state, action: PayloadAction<PassengersDataObject>) => {
            state.passengers = action.payload.passengers
            state.telInput = action.payload.telInput
        },
        addPassenger: (state, action: PayloadAction<PassengerObject>) => {
            let formPassengerData: PassengerObject = action.payload
            let newPassenger: PassengerObject = {
                name: formPassengerData.name,
                telephone: formPassengerData.telephone,
                startTime: formPassengerData.startTime,
                pointFrom: {
                    longitude: formPassengerData.pointFrom.longitude,
                    latitude: formPassengerData.pointFrom.latitude
                },
                pointTo: {
                    longitude: formPassengerData.pointTo.longitude,
                    latitude: formPassengerData.pointTo.latitude
                }
            }
            state.passengers.push(newPassenger)
        },

        updateTelephone: (state, action: PayloadAction<PassengersDataObject>) => {
            state.telInput = action.payload.telInput
        }
    },
})

export const {setPassengers, addPassenger, updateTelephone } = passengersSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPassengers = (state: RootState) => state

export default passengersSlice.reducer

