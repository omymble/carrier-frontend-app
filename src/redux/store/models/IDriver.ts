import {IPoint} from "./IPoint";

export interface IDriver {
    name: string;
    id: string;
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