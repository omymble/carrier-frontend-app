import React from "react";
import classes from './PassengerPage.module.scss'
import {RideForm} from "../../components/RideForm/RideForm";


export const PassengerPage = (props: {addPassenger: Function}) => {
    return (
        <div className={classes.passengerPage}>
            <h1>PassengerPage</h1>
            <RideForm addPassenger={props.addPassenger}/>
        </div>
    )
}