import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import {useNavigate} from "react-router-dom";
import Grid from "@mui/material/Grid";

export const ChooseRole = (props: { id: string, role: string, text: string, img: string }) => {
    let navigate = useNavigate();

    function onCardClick(event: any) {
        event.preventDefault()
        navigate(`/${props.id}`, {replace: false})
    }

    return (
        <Card sx={{
            width: 320,
            height: 420,
            display: 'flex'
        }}>
            <CardActionArea onClick={onCardClick}>
                <Grid container direction='column' alignItems={'center'}>
                    <Grid item>
                        <CardMedia
                            component="img"
                            height="240"
                            width="350"
                            src={props.img}
                            alt="роль пользователя"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                {props.role}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {props.text}
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </CardActionArea>
        </Card>
    );
}