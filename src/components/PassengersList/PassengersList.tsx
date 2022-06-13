import React from 'react';
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
                <Grid container spacing={4} justifyContent={{xs: "center", sm: "start"}}>
                    {Array.from(tsxPassengersList).map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            {tsxPassengersList[index]}
                        </Grid>
                    ))}
                </Grid>
            </Box>
    )
}

