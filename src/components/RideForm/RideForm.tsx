import * as React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import {addPassenger} from "../../redux/state";
import {PassengerObject} from "../../types";

export const RideForm = (props: {addPassenger: Function}) => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('name'),
            tel: data.get('telephone')
        });
        let newPassenger: PassengerObject = {
            name: String(data.get('name')),
            telephone: String(data.get('telephone')),
            pointFrom: {longitude: Number(data.get('pointFrom')), latitude: Number(data.get('pointFrom'))},
            pointTo: {longitude: Number(data.get('pointTo')), latitude: Number(data.get('pointTo'))},
            startTime: String(data.get('time'))
        }
        props.addPassenger(newPassenger)
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
            <br/>
            <TextField id="telephone" label="Телефон" variant="outlined" name="telephone"/>
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