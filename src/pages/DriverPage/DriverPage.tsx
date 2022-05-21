import React from "react";
import classes from "./DriverPage.module.scss";
import {driversSlice} from "../../redux/store/reducers/driversSlice"
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {IDriver} from "../../redux/store/models/IDriver";
import {DriverForm} from "../../components/DriverForm/DriverForm";
import {queryAPI} from "../../redux/services/queryService";

export const DriverPage = (props: {}) => {

    const {addDriver} = driversSlice.actions
    const {driver, isLoading, error} = useAppSelector(state => state.driversReducer)
    const {telephone, isAuth} = useAppSelector(state => state.authReducer)
    const dispatch = useAppDispatch()

    const [createDriver, {error: createDriverError}] = queryAPI.useCreateDriverMutation()

    const addDriverOnSubmit = async (newDriver: IDriver) => {
        await createDriver({
            name: newDriver.name,
            telephone: newDriver.telephone,
            seats: newDriver.seats,
            time: newDriver.time,
            from: {...newDriver.from},
            to: {...newDriver.to}} as IDriver)
            .then(response => {
                if (response) {
                    dispatch(addDriver(newDriver))
                }
            })

    }

    return (
        <div className={classes.driverForm}>
            <h1>Данные о водителе:</h1>
            <DriverForm addDriver={addDriverOnSubmit} telInput={telephone}/>
        </div>
    )
}