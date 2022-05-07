import {DriverObject, DriversDataObject} from "../types";

const ADD_DRIVER: string = 'ADD-DRIVER'
const UPDATE_TELEPHONE: string = 'UPDATE-TELEPHONE'

let initialDriversState: DriversDataObject = {
    telInput: '89093337772',
    drivers: [
        {name: 'Ольга Макарова',
            telephone: '+79432735838',
            emptySeats: 4,
            startTime: '15:30',
            pointFrom: {longitude: 34.8573487, latitude: 67.24534},
            pointTo: {longitude: 34.8573487, latitude: 67.24534}
        },
        {name: 'Илья Воробьев',
            telephone: '+78765423',
            emptySeats: 2,
            startTime: '19:30',
            pointFrom: {longitude: 34.8573487, latitude: 67.24534},
            pointTo: {longitude: 34.8573487, latitude: 67.24534}
        },
        {name: 'Анна Журавлева',
            telephone: '+78674537575',
            emptySeats: 2,
            startTime: '12:00',
            pointFrom: {longitude: 34.8573487, latitude: 67.24534},
            pointTo: {longitude: 34.8573487, latitude: 67.24534}
        },
        {name: 'Ольга Макарова',
            telephone: '+79432735838',
            emptySeats: 1,
            startTime: '15:30',
            pointFrom: {longitude: 34.8573487, latitude: 67.24534},
            pointTo: {longitude: 34.8573487, latitude: 67.24534}
        }
    ]
}

const driversReducer = (state: DriversDataObject = initialDriversState, action: any) => {

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
            return state

        case UPDATE_TELEPHONE:
            state.telInput = action.telephone
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