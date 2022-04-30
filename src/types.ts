type StateObject = {
    [key: string]: any;
    passengers: Array<PassengerObject>;
    drivers: Array<DriverObject>;
};

type PointObj = {
    longitude: number;
    latitude: number;
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

export type {PointObj, StateObject, DriverObject, PassengerObject}