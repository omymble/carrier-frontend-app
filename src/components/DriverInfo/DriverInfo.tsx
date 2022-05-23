// import classes from './DriverInfo.module.scss'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {IFoundDriver} from "../../redux/store/models/IFoundDriver";
import {CardActionArea} from "@mui/material";

export const DriverInfo = (props : {foundDriverData: IFoundDriver; key: number}) => {

    return (

        <Card sx={{ maxWidth: 350, minWidth: 245, height: 400}}>
            {/*<a href="tel:+7-903-7361629" onClick={(event) => {event.stopPropagation()}}>*/}
            <CardActionArea href={"tel:+7-903-7361629"}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.foundDriverData.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.foundDriverData.telephone}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardContent>
                <Typography variant="body2" color="text.secondary" className="ymaps-geolink" paragraph={true} sx={{color: 'primary.dark'}}>
                    {props.foundDriverData.from}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="ymaps-geolink">
                    {props.foundDriverData.to}
                </Typography>
            </CardContent>
            {/*</a>*/}
        </Card>
/*        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>*/
    );
}