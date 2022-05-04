import classes from './PassengerInfo.module.scss'
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import {PassengerObject} from "../../types";

export const PassengerInfo = (props : {passengerData: PassengerObject; key: number}) => {
    const card = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    ПАССАЖИР
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.passengerData.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.passengerData.telephone}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.passengerData.startTime}
                </Typography>
                <Typography variant="body2">
                    {props.passengerData.pointFrom.longitude}
                    <br />
                    {props.passengerData.pointFrom.latitude}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </React.Fragment>
    );
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}