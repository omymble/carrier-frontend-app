import {IPoint} from "./IPoint";

export interface IPassenger {
    name: string;
    id: string;
    time: number;
    from: IPoint;
    to: IPoint;
}

export interface IPassengersList {
    passengersBestTime: IPassenger[],
    passengersBestRoute: IPassenger[],
    morePassengers: IPassenger[]
}