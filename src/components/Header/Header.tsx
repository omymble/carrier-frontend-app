// import classes from './Header.module.scss'
import React from "react";
import {Navbar} from "./Navbar/Navbar";
import {authSlice} from "../../redux/store/reducers/authSlice";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {IAuth} from "../../redux/store/models/IAuth";
import {links} from "./links";

export const Header = (props: object) => {
    let {telephone, isAuth} = useAppSelector(state => state.authReducer)
    let {signIn, signOut} = authSlice.actions
    const dispatch = useAppDispatch()

    let onAuthClick = () => {
        dispatch(signOut(telephone))
    }

    return (
        <Navbar isAuth={isAuth} telephone={telephone} onAuthClick={onAuthClick}/>
    )
}