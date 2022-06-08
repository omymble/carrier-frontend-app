import React from "react";
import {useNavigate} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LogoutIcon from '@mui/icons-material/Logout';


export const Navbar = (props: { isAuth: boolean, telephone: string, onAuthClick: Function}) => {
    const navigate = useNavigate()

    const onAuthClick = () => {
        props.onAuthClick(props.telephone)
        navigate('/', {replace: true})
    };

    const onLogoClick = () => {
        navigate('/home')
    }

    return (
        <AppBar position="static"
                sx={{
                    marginBottom: {xs: '30px', sm: '50px'},
                    height: 70,
                    display: 'flex',
                    justifyContent: 'center'
                }}
        >
            <Toolbar>
                <IconButton
                    onClick={onLogoClick}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2}}
                >
                    <DirectionsCarIcon sx={{fontSize: 55}}/>
                </IconButton>
                <Typography variant="h4" component="div" sx={{flexGrow: 1, fontSize: "25px", fontWeight: "bold", letterSpacing: "2px"}}>
                    CARRIER APP
                </Typography>
                {props.isAuth && (
                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={onAuthClick}
                            color="inherit"
                        >
                            <LogoutIcon sx={{fontSize: 55}}/>
                        </IconButton>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}