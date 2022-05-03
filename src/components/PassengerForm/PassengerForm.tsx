import * as React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import {PassengerObject} from "../../types";
import {addPassengerActionCreator, updateTelephoneActionCreator} from "../../redux/state";


export const PassengerForm = (props: {dispatch: Function, telInput: String}) => {

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
        // props.addPassenger(newPassenger)
        props.dispatch(addPassengerActionCreator(newPassenger))
    };

    const onFormChange = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        let data = new FormData(event.currentTarget)
        // props.updateTelephone(String(data.get('telephone')))
        props.dispatch(updateTelephoneActionCreator(String(data.get('telephone'))))
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
            <TextField id="name" label="Имя" variant="outlined" name="name" type='text'/>
            <br/>
            <TextField id="telephone" label="Телефон" variant="outlined" name="telephone" type='tel' defaultValue={props.telInput}
            />
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