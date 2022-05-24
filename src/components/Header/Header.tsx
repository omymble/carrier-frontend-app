// import classes from './Header.module.scss'
import React from "react";
import {Navbar} from "./Navbar/Navbar";
import {authSlice} from "../../redux/store/reducers/authSlice";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {Outlet} from "react-router-dom"
import {queryAPI} from "../../redux/services/queryService";
import {IAuth} from "../../redux/store/models/IAuth";

export const Header = (props: object) => {
    let {id, isAuth} = useAppSelector(state => state.authReducer)
    let {signIn, signOut} = authSlice.actions
    const [deleteAuth, {error: deleteAuthError}] = queryAPI.useDeleteAuthMutation()
    const dispatch = useAppDispatch()

    let authUser: IAuth = {
        id: id,
        isAuth: isAuth
    }

    let onAuthClick = async () => {
        await deleteAuth(authUser)
        dispatch(signOut(id))
    }

    return (
        <>
            <Navbar isAuth={isAuth} telephone={id} onAuthClick={onAuthClick}/>
            <Outlet/>
        </>
    )
}