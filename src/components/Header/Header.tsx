// import classes from './Header.module.scss'
import React from "react";
import {Navbar} from "./Navbar/Navbar";
import {links} from "./links";

export const Header = (props: object) => {
    return (
            <Navbar links={links}/>
    )
}