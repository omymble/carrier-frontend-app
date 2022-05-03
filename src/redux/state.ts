import {StoreObject, DriverObject, PassengerObject, StateObject} from "../types";

const ADD_PASSENGER: string = 'ADD-PASSENGER'
const ADD_DRIVER: string = 'ADD-DRIVER'
const UPDATE_TELEPHONE: string = 'UPDATE-TELEPHONE'



let store: StoreObject = {
    _state: {
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
            }/*,
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
            }*/
        ],
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
            },
            /*{name: 'Илья Воробьев',
                telephone: '+78765423',
                emptySeats: 3,
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
            },
            {name: 'Илья Воробьев',
                telephone: '+78765423',
                emptySeats: 1,
                startTime: '19:30',
                pointFrom: {longitude: 34.8573487, latitude: 67.24534},
                pointTo: {longitude: 34.8573487, latitude: 67.24534}
            },
            {name: 'Анна Журавлева',
                telephone: '+78674537575',
                emptySeats: 1,
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
            },*/
        ]
    },
    _callSubscriber(state: StateObject) {
        console.log('rerender tree method')
    },
    getState() {
        return this._state
    },
    subscribe(observer:Function) {
        // @ts-ignore
        this._callSubscriber = observer
    },
/*    updateTelephone(telephone:string) {
        this._state.telInput = telephone
        this._callSubscriber(this._state)
    },
    addPassenger(formPassengerData: PassengerObject) {
        let newPassenger: PassengerObject = {
            name: formPassengerData.name,
            telephone: formPassengerData.telephone,
            startTime: formPassengerData.startTime,
            pointFrom: {longitude: formPassengerData.pointFrom.longitude, latitude: formPassengerData.pointFrom.latitude},
            pointTo: {longitude: formPassengerData.pointTo.longitude, latitude: formPassengerData.pointTo.latitude}
        }
        this._state.passengers.push(newPassenger)
        this._callSubscriber(this._state)
    },
    addDriver(formDriverData: DriverObject) {
        let newDriver: DriverObject = {
            name: formDriverData.name,
            telephone: formDriverData.telephone,
            emptySeats: formDriverData.emptySeats,
            startTime: formDriverData.startTime,
            pointFrom: {longitude: formDriverData.pointFrom.longitude, latitude: formDriverData.pointFrom.latitude},
            pointTo: {longitude: formDriverData.pointTo.longitude, latitude: formDriverData.pointTo.latitude}
        }
        this._state.drivers.push(newDriver)
        this._callSubscriber(this._state)
    },*/


    dispatch(action: any) {
        if (action.type === ADD_PASSENGER) {
            let formPassengerData: PassengerObject = action.formPassengerData
            let newPassenger: PassengerObject = {
                name: formPassengerData.name,
                telephone: formPassengerData.telephone,
                startTime: formPassengerData.startTime,
                pointFrom: {longitude: formPassengerData.pointFrom.longitude, latitude: formPassengerData.pointFrom.latitude},
                pointTo: {longitude: formPassengerData.pointTo.longitude, latitude: formPassengerData.pointTo.latitude}
            }
            this._state.passengers.push(newPassenger)
            this._callSubscriber(this._state)
        } else if (action.type === ADD_DRIVER) {
            let formDriverData: DriverObject = action.formDriverData
            let newDriver: DriverObject = {
                name: formDriverData.name,
                telephone: formDriverData.telephone,
                emptySeats: formDriverData.emptySeats,
                startTime: formDriverData.startTime,
                pointFrom: {longitude: formDriverData.pointFrom.longitude, latitude: formDriverData.pointFrom.latitude},
                pointTo: {longitude: formDriverData.pointTo.longitude, latitude: formDriverData.pointTo.latitude}
            }
            this._state.drivers.push(newDriver)
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_TELEPHONE) {
            this._state.telInput = action.telephone
            this._callSubscriber(this._state)
        }
    }
}

const addPassengerActionCreator = (newPassenger: PassengerObject) => {
    return {
        type: 'ADD-PASSENGER',
        formPassengerData: newPassenger
    }
}
const updateTelephoneActionCreator = (telephone: string) => {
    return {
        type: 'UPDATE-TELEPHONE',
        telephone: telephone
    }
}

export {store, addPassengerActionCreator, updateTelephoneActionCreator}