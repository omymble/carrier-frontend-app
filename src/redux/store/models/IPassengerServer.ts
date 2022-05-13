import {IPoint} from "./IPoint";

export interface IPassengerServer {
    name: string;
    telephone: string;
    startTime: number;
    pointFrom: IPoint;
    pointTo: IPoint;
}