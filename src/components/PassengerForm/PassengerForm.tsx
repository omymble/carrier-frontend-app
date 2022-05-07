import * as React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import {PassengerObject} from "../../types";

export const PassengerForm = (props: { updateTelephone: Function, addPassenger: Function, telInput: String }) => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('name')
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

    const onFormChange = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        let data = new FormData(event.currentTarget)
        props.updateTelephone(data.get('telephone'))
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': {m: 1, width: '25ch'},
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            onChange={onFormChange}
        >
            <TextField id="name"
                       label="Имя"
                       variant="filled"
                       name="name"
                       type='text'
                       required
            />
            <br/>
            <TextField id="telephone"
                       label="Телефон"
                       variant="filled"
                       name="telephone"
                       type='tel'
                       defaultValue={props.telInput}
            />
            <TextField id="time"
                       variant="filled"
                       name="time"
                       type="time"
                       helperText="во сколько поедете"
                // required
            />
            <br/>
            <TextField id="pointFrom"
                       label="Начало маршрута"
                       variant="filled"
                       name="pointFrom"
                       type='number'
                // required
            />
            <TextField id="pointTo"
                       label="Конец маршрута"
                       variant="filled"
                       name="pointTo"
                       type='number'
                // required
            />
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