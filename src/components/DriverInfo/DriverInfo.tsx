// import classes from './DriverInfo.module.scss'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {DriverObject} from "../../types";

export const DriverInfo = (props : {driverData: DriverObject; key: number}) => {
    const card = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.driverData.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.driverData.telephone}
                </Typography>
                <Typography variant="body2">
                    {props.driverData.pointFrom.longitude}
                    <br />
                    {props.driverData.pointFrom.latitude}
                </Typography>
            </CardContent>
            {/*<CardActions>
                <Button size="small">Connect</Button>
            </CardActions>*/}
        </React.Fragment>
    );
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}