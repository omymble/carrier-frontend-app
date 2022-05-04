import {DriverObject, PassengerObject} from "../types";

const ADD_DRIVER: string = 'ADD-DRIVER'
const UPDATE_TELEPHONE: string = 'UPDATE-TELEPHONE'

const driversReducer = (state: any, action: any) => {
    switch (action.type) {

        case ADD_DRIVER:
            let formDriverData: DriverObject = action.formDriverData
            let newDriver: DriverObject = {
                name: formDriverData.name,
                telephone: formDriverData.telephone,
                emptySeats: formDriverData.emptySeats,
                startTime: formDriverData.startTime,
                pointFrom: {longitude: formDriverData.pointFrom.longitude, latitude: formDriverData.pointFrom.latitude},
                pointTo: {longitude: formDriverData.pointTo.longitude, latitude: formDriverData.pointTo.latitude}
            }
            state.drivers.push(newDriver)
            // this._callSubscriber(this._state)
            return state

        case UPDATE_TELEPHONE:
            state.telInput = action.telephone
            // this._callSubscriber(this._state)
            return state

        default:
            return state
    }
}

const addDriverActionCreator = (newDriver: DriverObject) => {
    return {
        type: ADD_DRIVER,
        formDriverData: newDriver
    }
}

const updateTelephoneActionCreator = (telephone: string) => {
    return {
        type: UPDATE_TELEPHONE,
        telephone: telephone
    }
}

export {driversReducer, addDriverActionCreator, updateTelephoneActionCreator}