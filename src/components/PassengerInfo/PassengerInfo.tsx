import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import {IPassenger} from "../../redux/store/models/IPassenger";
import {IFoundPassenger} from "../../redux/store/models/IFoundPassenger";
import {CardActionArea} from "@mui/material";
import Grid from "@mui/material/Grid";

export const PassengerInfo = (props : {foundPassengerData: IFoundPassenger; key: number}) => {
    const card = (
        <React.Fragment>
            <CardContent>
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
        <Card color={"e8eaf6"} sx={{
            minWidth: 245,
            height: 250,
            bgcolor: "#fffff",
            boxShadow: "7"
        }}>
            <CardActionArea href={"tel:"+props.foundPassengerData.telephone} sx={{height: "100%"}}>
                <CardContent>
                    <Grid container direction="column" wrap="nowrap" >
                        <Typography gutterBottom variant="h5" component="div">
                            {props.foundPassengerData.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.foundPassengerData.time}
                        </Typography>
                    </Grid>
                </CardContent>
                <CardContent>
                    <Typography variant="body2" color="text.secondary" paragraph={true}>
                        {props.foundPassengerData.from}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.foundPassengerData.to}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}