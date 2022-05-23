import * as React from 'react';
import Grid from '@mui/material/Grid';
import {ChooseRole} from "../../components/СhooseRole/ChooseRole";
import Box from "@mui/material/Box";
import driverPhoto from "../../assets/driver.jpeg"
import passengerPhoto from "../../assets/passenger.jpeg"
import {getAddress} from "../../formatFunctions";


export const HomePage = (props: any) => {
    return (
        <>
            <Box sx={{flexGrow: 1, margin: {xs: "50px auto", md: "100px auto"}}}>
                <Grid container
                      direction={{xs: 'column', md: 'row'}}
                      justifyContent={"center"}
                      alignContent={'center'}
                      spacing={{xs: 5, md: 10}}
                >
                    <Grid item>
                        <ChooseRole id={"driver"}
                                    role={"водитель"}
                                    text={"ищу пассажиров в дорогу"}
                                    img={driverPhoto}
                        />
                    </Grid>
                    <Grid item>
                        <ChooseRole id={"passenger"}
                                    role={"пассажир"}
                                    text={"ищу водителя в дорогу"}
                                    img={passengerPhoto}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}