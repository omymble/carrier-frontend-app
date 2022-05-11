import classes from './PassengerInfo.module.scss'
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import {IFoundPassenger} from "../../redux/store/models/IFoundPassenger";

export const PassengerInfo = (props : {foundPassengerData: IFoundPassenger; key: number}) => {
    const card = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                    ПАССАЖИР
                </Typography>
                <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                    {props.foundPassengerData.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.foundPassengerData.telephone}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.foundPassengerData.time}
                </Typography>
                <Typography variant="body2">
                    {props.foundPassengerData.from}
                    <br />
                    {props.foundPassengerData.to}
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