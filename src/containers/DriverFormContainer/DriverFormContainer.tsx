import * as React from "react";
import {DriverObject, StoreObject} from "../../types";
import {updateTelephoneActionCreator} from "../../redux/passengersReducer";
import {DriverForm} from "../../components/DriverForm/DriverForm";
import {addDriverActionCreator} from "../../redux/driversReducer";


export const DriverFormContainer = (props: { store: StoreObject }) => {

    const addDriver = (newDriver: DriverObject) => {
        let action = addDriverActionCreator(newDriver)
        props.store.dispatch(action)
    }

    const updateTelephone = (tel: string) => {
        let action = updateTelephoneActionCreator(tel)
        props.store.dispatch(action)
    }

    return (
        <DriverForm updateTelephone={updateTelephone}
                    addDriver={addDriver}
                    telInput={props.store.getState().driversData.telInput}/>
    );
}