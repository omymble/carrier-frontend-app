import * as React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import {DriverObject} from "../../types";

export const DriverForm = (props: { /*updateTelephone: Function,*/ addDriver: Function/*, telInput: String */}) => {

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
        props.addDriver(newDriver)
    };

    const onFormChange = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        let data = new FormData(event.currentTarget)
        // props.updateTelephone(data.get('telephone'))
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': {m: 1, width: '25ch'},
                '& .MuiTextField-root': {m: 1, width: '25ch'},
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            // onChange={onFormChange}
        >
            <TextField id="name"
                       label="Имя"
                       variant="filled"
                       name="name"
                       type='text'
                       required={true}
            />
            <TextField id="telephone"
                       label="Телефон"
                       variant="filled"
                       name="telephone"
                       type='tel'
                       // defaultValue={props.telInput}
                       required={true}
            />
            <br/>
            <TextField id="seats"
                       label="Свободные места"
                       variant="filled"
                       name="seats"
                       type='number'
                       required={true}
            />

            <TextField id="time"
                       variant="filled"
                       name="time"
                       type="time"
                       helperText="во сколько поедете"
                       required={true}
            />
            <br/>
            <TextField id="pointFrom"
                       label="Начало маршрута"
                       variant="filled"
                       name="pointFrom"
                       type="number"
                       required={true}
            />
            <TextField id="pointTo"
                       label="Конец маршрута"
                       variant="filled"
                       name="pointTo"
                       type="number"
                       required={true}
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