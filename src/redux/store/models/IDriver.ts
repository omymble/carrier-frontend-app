import {IPoint} from "./IPoint";

export interface IDriver {
    id: string;
    name: string;
    seats: number;
    time: number;
    from: IPoint;
    to: IPoint;
}

export interface IDriversList {
    driversBestTime: IDriver[],
    driversBestRoute: IDriver[],
    moreDrivers: IDriver[]
}