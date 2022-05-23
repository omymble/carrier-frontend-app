import * as React from 'react';
import Grid from '@mui/material/Grid';
import {ChooseRole} from "../../components/СhooseRole/ChooseRole";
import Box from "@mui/material/Box";
import driverPhoto from "../../assets/driver.jpeg"
import passengerPhoto from "../../assets/passenger.jpeg"
import {getAddress} from "../../formatFunctions";


export const HomePage = (props: any) => {
    // getAddress(30.334463, 59.882808).then(data => console.log(data))
    return (
        <>
            <Box sx={{flexGrow: 1, margin: "50px auto"}} >
                <Grid container justifyContent={"center"} spacing={{xs: 2, md: 3}} >
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
                                    text={"ищу водителя в дорогу" }
                                    img={passengerPhoto}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}