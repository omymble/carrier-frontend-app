import React from "react";
import classes from './PassengerPage.module.scss'
import {DriversList} from "../../components/DriversList/DriversList";
import {DriverObject, PassengersDataObject, StoreObject} from "../../types";
import {PassengersList} from "../../components/PassengersList/PassengersList";
import {PassengerFormContainer} from "../../containers/PassengerFormContainer/PassengerFormContainer";


export const PassengerPage = (props: {
    store: StoreObject,
    dispatch: Function,
    passengersData: PassengersDataObject,
    drivers: Array<DriverObject>,
}) => {
    return (
        <div className={classes.passengerPage}>
            <h1>Данные о пассажире:</h1>
            <PassengerFormContainer store={props.store}/>
            <PassengersList passengers={props.passengersData.passengers}/>
            <DriversList drivers={props.drivers}/>
        </div>
    )
}