import classes from './Header.module.scss'
import React from "react";
import {Navbar} from "./Navbar/Navbar";

export const Header = (props: object) => {
    return (
        <header className={classes.header}>
            <span className={classes.logo}>carrier-app</span>
            <Navbar/>
        </header>
    )
}