import {PointObj} from "../../../types";

export interface IDriver {
    name: string;
    telephone: string;
    emptySeats: number;
    startTime: string;
    pointFrom: PointObj;
    pointTo: PointObj;
}