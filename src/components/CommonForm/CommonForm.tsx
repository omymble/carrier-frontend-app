import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";

export const CommonForm = (props: object) => {
    let submitRide = ()=> {
        alert('Click')
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="name" label="Имя" variant="outlined" />
            <TextField id="telephone" label="Телефон" variant="outlined" />
            <br/>
            <TextField id="pointFrom" label="Начало маршрута" variant="outlined" />
            <TextField id="pointTo" label="Конец маршрута" variant="outlined" />
            <br/>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={submitRide}
                >
                    Подтвердить
                </Button>

        </Box>
    );
}