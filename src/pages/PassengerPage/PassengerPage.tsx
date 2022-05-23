import React from "react";
import classes from './PassengerPage.module.scss'
import {PassengerForm} from "../../components/PassengerForm/PassengerForm";
import {passengersSlice} from "../../redux/store/reducers/passengersSlice";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {IPassenger} from "../../redux/store/models/IPassenger";
import {queryAPI} from "../../redux/services/queryService";
import Button from "@mui/material/Button";
import {useNavigate, Link} from "react-router-dom";
import Container from "@mui/material/Container";


export const PassengerPage = (props: {}) => {

    const {addPassenger} = passengersSlice.actions
    // const {passenger, isLoading, error} = useAppSelector(state => state.passengersReducer)
    const {telephone, isAuth} = useAppSelector(state => state.authReducer)
    const dispatch = useAppDispatch()

    const [createPassenger, {error: createPassengerError}] = queryAPI.useCreatePassengerMutation()

    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    const addPassengerOnSubmit = async (newPassenger: IPassenger) => {
        await createPassenger({
            name: newPassenger.name,
            telephone: newPassenger.telephone,
            time: newPassenger.time,
            from: {...newPassenger.from},
            to: {...newPassenger.to}} as IPassenger)
            .then(response => {
                if (response) {
                    dispatch(addPassenger(newPassenger))
                }
            })
        navigate('/drivers-list')
    }

    return (
        <Container className={classes.passengerPage}>
            <h2>Заполните данные о желаемой поездке</h2>
            <PassengerForm addPassenger={addPassengerOnSubmit} telInput={telephone}/>
            <Button onClick={goBack}>Назад</Button>
        </Container>
    )
}