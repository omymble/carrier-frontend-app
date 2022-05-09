import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import  {  useNavigate} from "react-router";

export const ChooseRole = (props: {id: string, role: string, text:string, img: string}) => {
    let navigate = useNavigate();

    function onCardClick(event: any) {
        event.preventDefault()
        navigate(`${props.id}`)
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={onCardClick}>
                <CardMedia
                    component="img"
                    // height="240"
                    src={props.img}
                    // image={props.img}
                    alt="роль пользователя"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.role}
                        {/*водитель*/}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.text}
                        {/*ищу пассажиров в дорогу*/}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}