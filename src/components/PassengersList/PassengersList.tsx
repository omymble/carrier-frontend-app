import React from 'react';
import classes from './PassengersList.module.scss'
import {PassengerInfo} from "../PassengerInfo/PassengerInfo";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {IPassenger} from "../../redux/store/models/IPassenger";
import {IFoundPassenger} from "../../redux/store/models/IFoundPassenger";

export const PassengersList = (props: {passengers: Array<IFoundPassenger>}) => {
    let tsxPassengersList = props.passengers.map((item:IFoundPassenger, i: number) =>
        <PassengerInfo foundPassengerData={item} key={i}/>
    )
    return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(tsxPassengersList).map((item, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            {tsxPassengersList[index]}
                        </Grid>
                    ))}
                </Grid>
            </Box>
    )
}

