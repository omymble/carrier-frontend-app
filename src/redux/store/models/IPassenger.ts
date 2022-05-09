import {PointObj} from "../../../types";

export interface IPassenger {
    name: string;
    telephone: string;
    startTime: string;
    pointFrom: PointObj;
    pointTo: PointObj;
}