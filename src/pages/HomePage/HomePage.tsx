import * as React from 'react';
import Grid from '@mui/material/Grid';
import {ChooseRole} from "../../components/СhooseRole/ChooseRole";
import Box from "@mui/material/Box";
import driverPhoto from "../../assets/driver.jpeg"
import passengerPhoto from "../../assets/passengers.jpeg"


export const HomePage = (props: any) => {
    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 1, sm: 1, md: 2}}>
                    <Grid item xs={2} sm={4} md={4}>
                        <ChooseRole id={"driver"}
                                    role={"водитель"}
                                    text={"ищу пассажиров в дорогу"}
                                    img={driverPhoto}
                        />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <ChooseRole id={"passenger"}
                                    role={"пассажир"}
                                    text={"ищу водителя в дорогу" }
                                    img={passengerPhoto}
                        />
                    </Grid>

                </Grid>
            </Box>
        </>
    )
}