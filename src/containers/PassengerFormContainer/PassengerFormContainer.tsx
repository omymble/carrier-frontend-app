import * as React from "react";
import {PassengerObject, StoreObject} from "../../types";
import {addPassengerActionCreator, updateTelephoneActionCreator} from "../../redux/passengersReducer";
import {PassengerForm} from "../../components/PassengerForm/PassengerForm";

export const PassengerFormContainer = (props: { store: StoreObject }) => {

    const addPassenger = (newPassenger: PassengerObject) => {
        let action = addPassengerActionCreator(newPassenger)
        props.store.dispatch(action)
    }

    const updateTelephone = (tel: string) => {
        let action = updateTelephoneActionCreator(tel)
        props.store.dispatch(action)
    }

    return (
        <PassengerForm updateTelephone={updateTelephone}
                       addPassenger={addPassenger}
                       telInput={props.store.getState().passengersData.telInput}
        />
    );
}