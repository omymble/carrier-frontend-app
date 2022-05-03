import * as React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import {DriverObject, PassengerObject} from "../../types";

export const DriverForm = (props: {dispatch: Function}) => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('name')
        });
        let newDriver: DriverObject = {
            name: String(data.get('name')),
            telephone: String(data.get('telephone')),
            emptySeats: Number(data.get('seats')),
            startTime: String(data.get('time')),
            pointFrom: {longitude: Number(data.get('pointFrom')), latitude: Number(data.get('pointFrom'))},
            pointTo: {longitude: Number(data.get('pointTo')), latitude: Number(data.get('pointTo'))},

        }
        // props.addDriver(newDriver)
        props.dispatch({type: 'ADD-DRIVER', formDriverData: newDriver})
    };

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': {m: 1, width: '25ch'},
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <TextField id="name" label="Имя" variant="outlined" name="name" type='text'/>
            <TextField id="telephone" label="Телефон" variant="outlined" name="telephone" type='tel'/>
            <br/>
            <TextField id="seats" label="Свободные места" variant="outlined" name="seats" type='number'/>
            <TextField id="time" label="Время" variant="outlined" name="time"/>
            <br/>
            <TextField id="pointFrom" label="Начало маршрута" variant="outlined" name="pointFrom" type='number'/>
            <TextField id="pointTo" label="Конец маршрута" variant="outlined" name="pointTo"/>
            <br/>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 2}}
            >
                Подтвердить
            </Button>

        </Box>
    );
}