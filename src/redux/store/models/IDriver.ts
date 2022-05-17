import {IPoint} from "./IPoint";

export interface IDriver {
    name: string;
    telephone: string;
    seats: number;
    time: number;
    from: IPoint;
    to: IPoint;
}