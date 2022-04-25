import classes from './PassengersList.module.scss'
import {PassengerInfo} from "../PassengerInfo/PassengerInfo";

export const PassengersList = (props : any) => {
    let tsxPassengersList = props.passengers.map((item:any, i: number) =>
        <PassengerInfo passengerData={item} key={i}/>
    )
    console.log(props.passengers)
    return (
        <div className={classes.DriversList}>
            <h1>DriversList</h1>
            {tsxPassengersList}
        </div>
    )
}