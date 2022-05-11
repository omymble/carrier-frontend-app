import classes from './FoundDriversPage.module.scss'
import {DriversList} from "../../components/DriversList/DriversList";
import {driversSlice} from "../../redux/store/reducers/driversSlice"
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import axios from "axios";
import {foundDriversSlice} from "../../redux/store/reducers/foundDriversSlice";
import {IFoundDriver} from "../../redux/store/models/IFoundDriver";
import {useEffect} from "react";
import {fetchFoundDrivers, fetchUsers} from "../../redux/store/reducers/ActionCreators";
import {queryAPI} from "../../redux/services/queryService";


export const FoundDriversPage = (props: {}) => {
    // const dispatch = useAppDispatch()
    // const {foundDrivers, isLoading, error} = useAppSelector(state => state.foundDriversReducer)
    // let {setFoundDrivers, addDriver} = foundDriversSlice.actions
    //
    // const {users, isLoadingUsers, errorUsers} = useAppSelector(state => state.userReducer)
    //
    // useEffect(() => {
    //     dispatch(fetchFoundDrivers())
    //     dispatch(fetchUsers())
    // }, [])
    //
    //
    // const setDrivers = (foundDrivers: Array<IFoundDriver>) => {
    //     dispatch(setFoundDrivers(foundDrivers))
    // }


    const {data: foundDrivers, error, isLoading} = queryAPI.useFetchAllFoundDriversQuery()

    return (
        <div className={classes.foundDriversPage}>
            <h1>Нашлись водители:</h1>
            {isLoading && <h1>Loading</h1>}
            {error && <h1>error</h1>}
            {foundDrivers && <DriversList drivers={foundDrivers}/>}
        </div>
    )
}