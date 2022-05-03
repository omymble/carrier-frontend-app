import React from "react";
import classes from './PassengerPage.module.scss'
import {DriversList} from "../../components/DriversList/DriversList";
import {DriverObject, PassengerObject} from "../../types";
import {PassengerForm} from "../../components/PassengerForm/PassengerForm";
import {PassengersList} from "../../components/PassengersList/PassengersList";


export const PassengerPage = (props: {
    dispatch: Function,
    telInput: String,
    drivers: Array<DriverObject>,
    passengers: Array<PassengerObject>
}) => {
    return (
        <div className={classes.passengerPage}>
            <h1>PassengerPage</h1>
            <PassengerForm dispatch={props.dispatch}
                           telInput={props.telInput}
            />
            <PassengersList passengers={props.passengers}/>
            <DriversList drivers={props.drivers}/>
        </div>
    )
}