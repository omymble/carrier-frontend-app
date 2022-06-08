import React from "react";
import {PassengerForm} from "../../components/PassengerForm/PassengerForm";
import {passengersSlice} from "../../redux/store/reducers/passengersSlice";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {IPassenger} from "../../redux/store/models/IPassenger";
import {queryAPI} from "../../redux/services/queryService";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";


export const PassengerPage = (props: {}) => {

    const {addPassenger} = passengersSlice.actions
    const {id, isAuth} = useAppSelector(state => state.authReducer)
    const dispatch = useAppDispatch()

    const [createPassenger, {error: createPassengerError}] = queryAPI.useCreatePassengerMutation()

    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    const addPassengerOnSubmit = async (newPassenger: IPassenger) => {
        await createPassenger({
            name: newPassenger.name,
            id: newPassenger.id,
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
        <Container sx={{maxWidth: "975px"}} >
            <Typography variant={'h4'}
                        gutterBottom={true}
                        sx={{

                        }}
            >
                Заполните данные о желаемой поездке
            </Typography>
            <PassengerForm addPassenger={addPassengerOnSubmit} telInput={id}/>
            <Button onClick={goBack}>Назад</Button>
        </Container>
    )
}