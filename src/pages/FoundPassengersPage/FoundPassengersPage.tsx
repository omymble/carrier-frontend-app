import classes from './FoundPassengersPage.module.scss'
import {PassengersList} from "../../components/PassengersList/PassengersList";
import {queryAPI} from "../../redux/services/queryService";
import {foundPassengersSlice} from "../../redux/store/reducers/foundPassengersSlice";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";

export const FoundPassengersPage = (props: {}) => {
    const {setFoundPassengers, addPassenger} = foundPassengersSlice.actions
    const {foundPassengers} = useAppSelector(state => state.foundPassengersReducer)
    const dispatch = useAppDispatch()

    const {data: foundPassengersServer, error, isLoading} = queryAPI.useFetchAllFoundPassengersQuery()

    if (foundPassengers.length === 0) {
        foundPassengersServer && dispatch(setFoundPassengers(foundPassengersServer))
    }

    return (
        <div className={classes.foundPassengersPage}>
            <h1>Нашлись пассажиры:</h1>
            {isLoading && <h1>Loading</h1>}
            {error && <h1>error</h1>}
            <PassengersList passengers={foundPassengers}/>
        </div>
    )
}