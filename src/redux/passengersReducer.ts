import {PassengerObject, PassengersDataObject} from "../types";

const ADD_PASSENGER: string = 'ADD-PASSENGER'
const UPDATE_TELEPHONE: string = 'UPDATE-TELEPHONE'

let initialPassengersState: PassengersDataObject = {
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

const passengersReducer = (state: PassengersDataObject = initialPassengersState, action: any) => {

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
            state.passengers.push(newPassenger)
            return state

        case UPDATE_TELEPHONE:
            state.telInput = action.telephone
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