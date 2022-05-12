import React from "react";
import classes from './PassengerPage.module.scss'
import {PassengerForm} from "../../components/PassengerForm/PassengerForm";
import {passengersSlice} from "../../redux/store/reducers/passengersSlice";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {IPassenger} from "../../redux/store/models/IPassenger";
import {queryAPI} from "../../redux/services/queryService";


export const PassengerPage = (props: {}) => {

    const {addPassenger, updateTelInput} = passengersSlice.actions
    const {passengers, isLoading, error} = useAppSelector(state => state.passengersReducer)
    const {telephone, isAuth} = useAppSelector(state => state.authReducer)
    const dispatch = useAppDispatch()

    const [createPassenger, {error: createPassengerError}] = queryAPI.useCreatePassengerMutation()

    const addPassengerOnSubmit = async (newPassenger: IPassenger) => {
        await createPassenger({name: newPassenger.name, telephone: newPassenger.telephone} as IPassenger)
            .then(response => {
                if (response) {
                    dispatch(addPassenger(newPassenger))
                }
            })
    }

    const updateTelephoneOnChange = (tel: string) => {
        // dispatch(updateTelInput(tel))
    }

    return (
        <div className={classes.passengerPage}>
            <h1>Данные о пассажире:</h1>
            <PassengerForm addPassenger={addPassengerOnSubmit} telInput={telephone}/>
        </div>
    )
}