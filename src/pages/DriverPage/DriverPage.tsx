import React from "react";
import {driversSlice} from "../../redux/store/reducers/driversSlice"
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {IDriver} from "../../redux/store/models/IDriver";
import {DriverForm} from "../../components/DriverForm/DriverForm";
import {queryAPI} from "../../redux/services/queryService";
import {useNavigate} from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const DriverPage = (props: {}) => {
    const {addDriver} = driversSlice.actions
    const {id} = useAppSelector(state => state.authReducer)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    const [createDriver] = queryAPI.useCreateDriverMutation()
    const addDriverOnSubmit = async (newDriver: IDriver) => {
        await createDriver({
            name: newDriver.name,
            id: newDriver.id,
            seats: newDriver.seats,
            time: newDriver.time,
            from: {...newDriver.from},
            to: {...newDriver.to}} as IDriver)
            .then(response => {
                if (response) {
                    dispatch(addDriver(newDriver))
                }
            })
        navigate('/passengers-list')
    }
    return (
        <Container>
            <Typography variant={'h4'} gutterBottom={true} sx={{}}>
                Заполните данные о предстоящей поездке
            </Typography>
            <DriverForm addDriver={addDriverOnSubmit} telInput={id}/>
            <Button onClick={goBack}>Назад</Button>
        </Container>
    )
}