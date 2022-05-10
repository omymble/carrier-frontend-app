// import classes from './DriverInfo.module.scss'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {IFoundDriver} from "../../redux/store/models/IFoundDriver";

export const DriverInfo = (props : {foundDriverData: IFoundDriver; key: number}) => {

    const card = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                    ВОДИТЕЛЬ
                </Typography>
                <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                    {props.foundDriverData.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.foundDriverData.telephone}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.foundDriverData.time}
                </Typography>
                <Typography variant="body2">
                    {props.foundDriverData.from}
                    <br />
                    {props.foundDriverData.to}
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