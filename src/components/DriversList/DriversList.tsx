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
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(tsxDriversList).map((item, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            {tsxDriversList[index]}
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}
