import classes from "./DriverPage.module.scss";
import {DriverObject, PassengerObject} from "../../types";
import {DriverForm} from "../../components/DriverForm/DriverForm";
import {PassengersList} from "../../components/PassengersList/PassengersList";
import {DriversList} from "../../components/DriversList/DriversList";

export const DriverPage = (props: {
    dispatch: Function,
    telInput: String,
    passengers: Array<PassengerObject>,
    drivers: Array<DriverObject>
}) => {
    return (
        <div className={classes.driverForm}>
            <h1>DriverPage</h1>
            <DriverForm dispatch={props.dispatch}
                        telInput={props.telInput}
            />
            <DriversList drivers={props.drivers}/>
            <PassengersList passengers={props.passengers}/>
        </div>
    )
}