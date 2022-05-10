import React from "react";
import classes from './PassengerPage.module.scss'
import {PassengersList} from "../../components/PassengersList/PassengersList";
import {PassengerForm} from "../../components/PassengerForm/PassengerForm";
import {passengersSlice} from "../../redux/store/reducers/passengersSlice";
import {authSlice} from "../../redux/store/reducers/authSlice";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {IPassenger} from "../../redux/store/models/IPassenger";


export const PassengerPage = (props: {}) => {

    const {addPassenger, updateTelInput} = passengersSlice.actions
    const {telInput, passengers, isLoading, error} = useAppSelector(state => state.passengersReducer)
    const dispatch = useAppDispatch()

    const addPassengerOnSubmit = (newPassenger: IPassenger) => {
        dispatch(addPassenger(newPassenger))
    }

    const updateTelephoneOnChange = (tel: string) => {
        dispatch(updateTelInput(tel))
    }

    return (
        <div className={classes.passengerPage}>
            <h1>Данные о пассажире:</h1>
            <PassengerForm updateTelephone={updateTelephoneOnChange}
                           addPassenger={addPassengerOnSubmit}
                           telInput={telInput}
            />
            {/*<PassengerFormContainer store={props.store}/>*/}
            <PassengersList passengers={passengers}/>
            {/*<DriversList drivers={props.drivers}/>*/}
        </div>
    )
}