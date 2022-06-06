import {IPoint} from "./IPoint";

export interface IPassenger {
    id: string;
    name: string;
    time: number;
    from: IPoint;
    to: IPoint;
}

export interface IPassengersList {
    passengersBestTime: IPassenger[],
    passengersBestRoute: IPassenger[],
    morePassengers: IPassenger[]
}