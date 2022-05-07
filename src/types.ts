export type StoreObject = {
    _state: StateObject;
    _callSubscriber: Function;
    getState: Function;
    subscribe: Function;
    dispatch: Function;
}
export type PassengersDataObject = {
    telInput: string;
    passengers: Array<PassengerObject>;
}

export type DriversDataObject = {
    telInput: string;
    drivers: Array<DriverObject>;
}

export type StateObject = {
    [key: string]: any;
    passengersData: PassengersDataObject;
    driversData: DriversDataObject;
};

export type PointObj = {
    longitude: number;
    latitude: number;
}

export type PassengerObject = {
    name: string;
    telephone: string;
    startTime: string;
    pointFrom: PointObj;
    pointTo: PointObj;
}

export type DriverObject = {
    name: string;
    telephone: string;
    emptySeats: number;
    startTime: string;
    pointFrom: PointObj;
    pointTo: PointObj;
}