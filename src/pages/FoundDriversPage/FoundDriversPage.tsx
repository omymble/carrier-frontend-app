import classes from './FoundDriversPage.module.scss'
import {DriversList} from "../../components/DriversList/DriversList";
import {driversSlice} from "../../redux/store/reducers/driversSlice"
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";

export const FoundDriversPage = (props: {}) => {
    const {addDriver, updateTelInput} = driversSlice.actions
    const {telInput, drivers, isLoading, error} = useAppSelector(state => state.driversReducer)
    return (
        <div className={classes.foundDriversPage}>
            <h1>Нашлись водители:</h1>
            <DriversList drivers={drivers}/>
        </div>
    )
}