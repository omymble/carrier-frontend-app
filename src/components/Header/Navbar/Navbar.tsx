import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Navbar.module.scss'

export const Navbar = () => {
    return (
        <nav className="classes.nav">
            <ul className={classes.navList}>
                <li className={classes.navList__item}><NavLink to={'/sign-in'}>войти</NavLink></li>
                <li className={classes.navList__item}><NavLink to={'/passenger'}>я - пассажир</NavLink></li>
                <li className={classes.navList__item}><NavLink to={'/driver'}>я - водитель</NavLink></li>
                <li className={classes.navList__item}><NavLink to={'/drivers-list'}>список водителей</NavLink></li>
                <li className={classes.navList__item}><NavLink to={'/passengers-list'}>список пассажиров</NavLink></li>
            </ul>
        </nav>
    )
}