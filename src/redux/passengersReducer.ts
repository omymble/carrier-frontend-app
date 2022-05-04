import {PassengerObject} from "../types";

const ADD_PASSENGER: string = 'ADD-PASSENGER'
const UPDATE_TELEPHONE: string = 'UPDATE-TELEPHONE'

const passengersReducer = (state: any /*Array<PassengerObject>*/, action: any) => {
    switch(action.type) {
        case ADD_PASSENGER:
            let formPassengerData: PassengerObject = action.formPassengerData
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
            state.push(newPassenger)
            return state
            // state.passengers.push(newPassenger)
            // this._callSubscriber(this._state)
        case UPDATE_TELEPHONE:
            state.telInput = action.telephone
            // this._callSubscriber(this._state)
            return state
        default:
            return state
    }
}

const addPassengerActionCreator = (newPassenger: PassengerObject) => {
    return {
        type: ADD_PASSENGER,
        formPassengerData: newPassenger
    }
}

const updateTelephoneActionCreator = (telephone: string) => {
    return {
        type: UPDATE_TELEPHONE,
        telephone: telephone
    }
}

export {passengersReducer, addPassengerActionCreator, updateTelephoneActionCreator}