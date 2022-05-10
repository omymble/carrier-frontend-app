import React from "react";
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
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {useAppDispatch, useAppSelector} from "../../../redux/hooks/hooks"
import {authSlice} from "../../../redux/store/reducers/authSlice";


export const Navbar = (props: { any }) => {
    const {signIn, signOut} = authSlice.actions
    const {telephone, isSignIn} = useAppSelector(state => state.authReducer)

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorElUser(event.currentTarget);
    // };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };
/*    return (
        <nav className="classes.nav">
            <ul className={classes.navList}>
                <li className={classes.navList__item}><NavLink to={'/sign-in'}>войти</NavLink></li>
                <li className={classes.navList__item}><NavLink to={'/passenger'}>я - пассажир</NavLink></li>
                <li className={classes.navList__item}><NavLink to={'/driver'}>я - водитель</NavLink></li>
                <li className={classes.navList__item}><NavLink to={'/drivers-list'}>список водителей</NavLink></li>
                <li className={classes.navList__item}><NavLink to={'/passengers-list'}>список пассажиров</NavLink></li>
            </ul>
        </nav>





    const ResponsiveAppBar = () => {*/


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
                            <NavLink to={'/home'} >Войти</NavLink>
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
                                {props.links.map((link:any, index:number) => (
                                    <MenuItem key={index} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">
                                                <NavLink className={classes.navList__item} to={link.url} >{link.title}</NavLink>
                                        </Typography>
                                    </MenuItem>
                                ))}
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
                            {props.links.map((link:any, index:number) => (
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
                            ))}
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        );
    // };
    // export default ResponsiveAppBar;

}