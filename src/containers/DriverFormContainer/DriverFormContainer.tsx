import * as React from "react";
import {DriverObject, StateObject, StoreObject} from "../../types";
import {updateTelephoneActionCreator} from "../../redux/passengersReducer";
import {DriverForm} from "../../components/DriverForm/DriverForm";
import {addDriverActionCreator} from "../../redux/driversReducer";
import {connect} from "react-redux";


/*export const DriverFormContainer = (props: { store_my: StoreObject }) => {

    const addDriver = (newDriver: DriverObject) => {
        let action = addDriverActionCreator(newDriver)
        props.store_my.dispatch(action)
    }

    const updateTelephone = (tel: string) => {
        let action = updateTelephoneActionCreator(tel)
        props.store_my.dispatch(action)
    }

    return (
        <DriverForm updateTelephone={updateTelephone}
                    addDriver={addDriver}
                    telInput={props.store_my.getState().driversData.telInput}/>
    );
}*/

let mapStateToProps = (state: StateObject): object => {
    return {
        telInput: state.driversData.telInput
    }
}

let mapDispatchToProps = (dispatch: Function): object => {
    return {
        // <StoreContext.Consumer>
        updateTelephone: (tel: string) => {
            let action = updateTelephoneActionCreator(tel)
            dispatch(action)
        },
        addDriver: (newDriver: DriverObject) => {
            let action = addDriverActionCreator(newDriver)
            dispatch(action)
        }
        // </StoreContext.Consumer>
    }
}


export const DriverFormContainer = connect(mapStateToProps, mapDispatchToProps)(DriverForm)
