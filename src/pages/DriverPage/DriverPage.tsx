import classes from "./DriverPage.module.scss";
import {DriversDataObject, PassengerObject, StoreObject} from "../../types";
import {PassengersList} from "../../components/PassengersList/PassengersList";
import {DriversList} from "../../components/DriversList/DriversList";
import {driversSlice} from "../../redux/store/reducers/driversSlice"
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {IDriver} from "../../redux/store/models/IDriver";
import {PassengerForm} from "../../components/PassengerForm/PassengerForm";
import React from "react";
import {DriverForm} from "../../components/DriverForm/DriverForm";

export const DriverPage = (props: {}) => {
    const {addDriver, updateTelInput} = driversSlice.actions
    const {telInput, drivers, isLoading, error} = useAppSelector(state => state.driversReducer)
    const dispatch = useAppDispatch()

    const addDriverOnSubmit = (newDriver: IDriver) => {
        dispatch(addDriver(newDriver))
    }

    const updateTelephoneOnChange = (tel: string) => {
        dispatch(updateTelInput(tel))
    }
    return (
        <div className={classes.driverForm}>
            <h1>Данные о водителе:</h1>
            <DriverForm updateTelephone={updateTelephoneOnChange}
                           addDriver={addDriverOnSubmit}
                           telInput={telInput}
            />
            {/*<DriversList drivers={drivers}/>*/}
        </div>
    )
}