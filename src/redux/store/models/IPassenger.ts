import {IPoint} from "./IPoint";

export interface IPassenger {
    name: string;
    telephone: string;
    time: number;
    from: IPoint;
    to: IPoint;
}