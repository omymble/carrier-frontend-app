import classes from './PassengersList.module.scss'
import {PassengerInfo} from "../PassengerInfo/PassengerInfo";
import {PassengerObject} from "../../types";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import * as React from "react";

export const PassengersList = (props: {passengers: Array<PassengerObject>}) => {
    let tsxPassengersList = props.passengers.map((item:any, i: number) =>
        <PassengerInfo passengerData={item} key={i}/>
    )
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(tsxPassengersList).map((item, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            {tsxPassengersList[index]}
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}

