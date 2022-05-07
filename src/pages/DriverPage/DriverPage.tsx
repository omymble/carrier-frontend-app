import classes from "./DriverPage.module.scss";
import {DriversDataObject, PassengerObject, StoreObject} from "../../types";
import {PassengersList} from "../../components/PassengersList/PassengersList";
import {DriversList} from "../../components/DriversList/DriversList";
import {DriverFormContainer} from "../../containers/DriverFormContainer/DriverFormContainer";

export const DriverPage = (props: {
    store: StoreObject,
    dispatch: Function,
    driversData: DriversDataObject,
    passengers: Array<PassengerObject>
}) => {
    return (
        <div className={classes.driverForm}>
            <h1>Данные о водителе:</h1>
            <DriverFormContainer store={props.store}/>
            <DriversList drivers={props.driversData.drivers}/>
            <PassengersList passengers={props.passengers}/>
        </div>
    )
}