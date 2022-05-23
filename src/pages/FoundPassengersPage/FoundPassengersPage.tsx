import classes from './FoundPassengersPage.module.scss'
import {PassengersList} from "../../components/PassengersList/PassengersList";
import {queryAPI} from "../../redux/services/queryService";
import {foundPassengersSlice} from "../../redux/store/reducers/foundPassengersSlice";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import Button from "@mui/material/Button";
import {driversSlice} from "../../redux/store/reducers/driversSlice";

export const FoundPassengersPage = (props: {}) => {
    const {addDriver, deleteDriver} = driversSlice.actions
    const {driver} = useAppSelector(state => state.driversReducer)
    const dispatch = useAppDispatch()


    const {data: foundPassengers, error, isLoading} = queryAPI.useFetchAllFoundPassengersQuery()
    const [deleteTrip, {}] = queryAPI.useDeleteDriverTripMutation()


    const deleteDriverTrip = () => {
        // deleteTrip(driver.telephone)
        dispatch(deleteDriver(driver.telephone))
    }

    return (
        <div className={classes.foundPassengersPage}>
            <Button onClick={deleteDriverTrip}>отменить поездку</Button>
            <h1>Нашлись пассажиры:</h1>
            {isLoading && <h1>Loading</h1>}
            {error && <h1>error</h1>}
            {foundPassengers && <PassengersList passengers={foundPassengers}/>}
        </div>
    )
}