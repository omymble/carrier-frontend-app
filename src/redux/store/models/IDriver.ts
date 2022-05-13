import {IPoint} from "./IPoint";

export interface IDriver {
    name: string;
    telephone: string;
    emptySeats: number;
    startTime: number;
    from: IPoint;
    to: IPoint;
}