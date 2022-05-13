import * as React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import {IPassenger} from "../../redux/store/models/IPassenger";


export const PassengerForm = (props: { addPassenger: Function, telInput: String }) => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget);
        let newPassenger: IPassenger = {
            name: String(data.get('name')),
            telephone: String(data.get('telephone')),
            startTime: Number(data.get('time')),
            from: {longitude: Number(data.get('pointFrom')), latitude: Number(data.get('pointFrom'))},
            to: {longitude: Number(data.get('pointTo')), latitude: Number(data.get('pointTo'))},
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
            <TextField id="name"
                       label="Имя"
                       variant="filled"
                       name="name"
                       type='text'
                       required={true}
            />
            <br/>
            <TextField id="telephone"
                       label="Телефон"
                       variant="filled"
                       name="telephone"
                       type='tel'
                       defaultValue={props.telInput}
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
                       type='number'
                       required={true}
            />
            <TextField id="pointTo"
                       label="Конец маршрута"
                       variant="filled"
                       name="pointTo"
                       type='number'
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