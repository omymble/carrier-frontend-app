import {IPoint} from "./IPoint";

export interface IPassenger {
    name: string;
    telephone: string;
    startTime: number;
    from: IPoint;
    to: IPoint;
}