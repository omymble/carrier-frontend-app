import  {DriverInfo} from "../DriverInfo/DriverInfo";
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {IFoundDriver} from "../../redux/store/models/IFoundDriver";

export const DriversList = (props: {drivers: Array<IFoundDriver>}) => {

    let tsxDriversList =  props.drivers.map((item:IFoundDriver, i:number) =>
        <DriverInfo foundDriverData={item} key={i}/>
    )

    return (
        <>
            <Box>
                <Grid container spacing={4} justifyContent={{xs: "center", sm: "start"}}>
                    {Array.from(tsxDriversList).map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            {tsxDriversList[index]}
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}