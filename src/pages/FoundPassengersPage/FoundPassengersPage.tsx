import classes from './FoundPassengersPage.module.scss'
import {PassengersList} from "../../components/PassengersList/PassengersList";
import {PassengerObject} from "../../types";

export const FoundPassengersPage = (props: {passengers: Array<PassengerObject>, addPassenger: Function}) => {
    return (
        <div className={classes.foundPassengersPage}>
            <h1>FoundPassengersPage</h1>
            <PassengersList passengers={props.passengers}/>
        </div>
    )
}