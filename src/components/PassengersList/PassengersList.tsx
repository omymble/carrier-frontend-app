import classes from './PassengersList.module.scss'
import {PassengerInfo} from "../PassengerInfo/PassengerInfo";
import {PassengerObject} from "../../types";

export const PassengersList = (props: {passengers: Array<PassengerObject>}) => {
    let tsxPassengersList = props.passengers.map((item:any, i: number) =>
        <PassengerInfo passengerData={item} key={i}/>
    )
    return (
        <div className={classes.DriversList}>
            {tsxPassengersList}
        </div>
    )
}