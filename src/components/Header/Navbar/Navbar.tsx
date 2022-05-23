import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import classes from './Navbar.module.scss'

import AppBar from '@mui/material/AppBar';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import {AccountCircle} from "@mui/icons-material";


export const Navbar = (props: { isAuth: boolean, telephone: string, onAuthClick: Function }) => {
    const navigate = useNavigate()

    const onAuthClick = () => {
        props.onAuthClick(props.telephone)
        navigate('/', {replace: true})
    };

    const onLogoClick = () => {
        navigate('/home')
    }

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static"
                sx={{
                    marginBottom: {xs: '30px', sm: '50px'},
                    height: 80,
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
                <Typography variant="h4" component="div" sx={{flexGrow: 1}}>
                    CARRIER APP
                </Typography>
                {props.isAuth && (
                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle sx={{fontSize: 55}}/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={onAuthClick}>выход</MenuItem>
                        </Menu>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}