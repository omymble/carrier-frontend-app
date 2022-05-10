import React from "react";
import {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import classes from './Navbar.module.scss'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import {useAppDispatch, useAppSelector} from "../../../redux/hooks/hooks"
import {authSlice} from "../../../redux/store/reducers/authSlice";


export const Navbar = (props: { isAuth: boolean, telephone: string, onAuthClick: Function }) => {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const onAuthClick = () => {
        props.onAuthClick(props.telephone)
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <NavLink to={'/home'} >CARRIER APP</NavLink>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    <NavLink className={classes.navList__item} to={'/sign-in'} onClick={onAuthClick}>{(props.isAuth) ? "выйти" : "войти"}</NavLink>
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    <NavLink className={classes.navList__item} to={'/passenger'} >пассажир</NavLink>
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    <NavLink className={classes.navList__item} to={'/driver'} >водитель</NavLink>
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    <NavLink className={classes.navList__item} to={'/drivers-list'} >водители</NavLink>
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    <NavLink className={classes.navList__item} to={'/passengers-list'} >пассажиры</NavLink>
                                </Typography>
                            </MenuItem>
                            {/*{props.links.map((link:any, index:number) => (
                                    <MenuItem key={index} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">
                                                <NavLink className={classes.navList__item} to={link.url} >{link.title}</NavLink>
                                        </Typography>
                                    </MenuItem>
                                ))}*/}
                        </Menu>
                    </Box>


                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        CARRIER APP
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <MenuItem onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">
                                <NavLink className={classes.navList__item} to={'/sign-in'} onClick={onAuthClick} >{(props.isAuth) ? "выйти" : "войти"}</NavLink>
                            </Typography>
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">
                                <NavLink className={classes.navList__item} to={'/passenger'} >пассажир</NavLink>
                            </Typography>
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">
                                <NavLink className={classes.navList__item} to={'/driver'} >водитель</NavLink>
                            </Typography>
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">
                                <NavLink className={classes.navList__item} to={'/drivers-list'} >водители</NavLink>
                            </Typography>
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">
                                <NavLink className={classes.navList__item} to={'/passengers-list'} >пассажиры</NavLink>
                            </Typography>
                        </MenuItem>

                        {/*{props.links.map((link:any, index:number) => (
                                <Button
                                    key={index}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >

                                        <MenuItem key={index} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">

                                                    <NavLink className={classes.navList__item} to={link.url}>
                                                            {link.title}
                                                    </NavLink>

                                            </Typography>
                                        </MenuItem>


                                </Button>
                            ))}*/}
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
    // };
    // export default ResponsiveAppBar;

}