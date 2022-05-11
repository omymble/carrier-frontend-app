import classes from "./DriverPage.module.scss";
import {driversSlice} from "../../redux/store/reducers/driversSlice"
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {IDriver} from "../../redux/store/models/IDriver";
import React from "react";
import {DriverForm} from "../../components/DriverForm/DriverForm";
import {queryAPI} from "../../redux/services/queryService";

export const DriverPage = (props: {}) => {
    // const {addDriver, updateTelInput} = driversSlice.actions
    // const {telInput, drivers, isLoading, error} = useAppSelector(state => state.driversReducer)
    // const dispatch = useAppDispatch()

    const [createDriver, {}] = queryAPI.useCreateDriverMutation()
    const addDriverOnSubmit = async (newDriver: IDriver) => {
        await createDriver({name: newDriver.name, telephone: newDriver.telephone} as IDriver)
    }

    // const addDriverOnSubmit = (newDriver: IDriver) => {
    //     dispatch(addDriver(newDriver))
    // }
    //
    // const updateTelephoneOnChange = (tel: string) => {
    //     dispatch(updateTelInput(tel))
    // }
    return (
        <div className={classes.driverForm}>
            <h1>Данные о водителе:</h1>
            <DriverForm addDriver={addDriverOnSubmit}
                        /*updateTelephone={updateTelephoneOnChange}*/
                           /*telInput={telInput}*/
            />
            {/*<DriversList drivers={drivers}/>*/}
        </div>
    )
}