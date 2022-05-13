import classes from './FoundDriversPage.module.scss'
import {DriversList} from "../../components/DriversList/DriversList";
import {queryAPI} from "../../redux/services/queryService";
import {foundDriversSlice} from "../../redux/store/reducers/foundDriversSlice";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {useEffect} from "react";


export const FoundDriversPage = (props: {}) => {
    const {setFoundDrivers, addDriver} = foundDriversSlice.actions
    const {foundDrivers} = useAppSelector(state => state.foundDriversReducer)
    const dispatch = useAppDispatch()

    const {data: foundDriversServer, error, isLoading} = queryAPI.useFetchAllFoundDriversQuery()

    if (foundDrivers.length === 0) {
        foundDriversServer && dispatch(setFoundDrivers(foundDriversServer))
    }


    return (
        <div className={classes.foundDriversPage}>
            <h1>Нашлись водители:</h1>
            {isLoading && <h1>Loading</h1>}
            {error && <h1>error</h1>}
            <DriversList drivers={foundDrivers}/>
        </div>
    )
}