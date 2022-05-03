type StoreObject = {
    _state: StateObject;
    _callSubscriber: Function;
    getState: Function;
    subscribe: Function;
    // updateTelephone: Function;
    // addPassenger: Function;
    // addDriver: Function;
    dispatch: Function;
}
type StateObject = {
    [key: string]: any;
    passengers: Array<PassengerObject>;
    drivers: Array<DriverObject>;
};

type PointObj = {
    longitude: number;
    latitude: number;
}

type UserObject = {
    name: string;
    telephone: string;
    startTime: string;
    pointFrom: PointObj;
    pointTo: PointObj;
}

type PassengerObject = {
    name: string;
    telephone: string;
    startTime: string;
    pointFrom: PointObj;
    pointTo: PointObj;
}

type DriverObject = {
    name: string;
    telephone: string;
    emptySeats: number;
    startTime: string;
    pointFrom: PointObj;
    pointTo: PointObj;
}

export type {StoreObject, PointObj, StateObject, DriverObject, PassengerObject}