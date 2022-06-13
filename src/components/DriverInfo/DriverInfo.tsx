import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {IFoundDriver} from "../../redux/store/models/IFoundDriver";
import {CardActionArea} from "@mui/material";
import Grid from "@mui/material/Grid";

export const DriverInfo = (props : {foundDriverData: IFoundDriver; key: number}) => {

    return (
        <Card color={"e8eaf6"} sx={{
            minWidth: 245,
            height: 250,
            bgcolor: "#fffff",
            boxShadow: "7"
        }}>
            <CardActionArea href={"tel:"+props.foundDriverData.telephone} sx={{height: "100%"}}>
                <CardContent>
                    <Grid container direction="column" wrap="nowrap" >
                        <Typography gutterBottom variant="h5" component="div">
                            {props.foundDriverData.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.foundDriverData.time}
                        </Typography>
                    </Grid>
                </CardContent>
                <CardContent>
                    <Typography variant="body2" color="text.secondary" paragraph={true}>
                        {props.foundDriverData.from}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.foundDriverData.to}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}