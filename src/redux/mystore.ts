import {StoreObject, StateObject} from "../types";
import {passengersReducer} from "./passengersReducer";
import {driversReducer} from "./driversReducer";

export const mystore: StoreObject = {
    _state: {
        passengersData: {
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
        },
        driversData: {
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
                },
            ]
        }
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

    dispatch(action: any) {
        this._state.passengers = passengersReducer(this._state.passengersData, action)
        this._state.drivers = driversReducer(this._state.driversData, action)
        this._callSubscriber(this._state)
    }
}


