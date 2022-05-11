import classes from './FoundPassengersPage.module.scss'
import {PassengersList} from "../../components/PassengersList/PassengersList";
import {queryAPI} from "../../redux/services/queryService";

export const FoundPassengersPage = (props: {}) => {

    const {data: foundPassengers, error, isLoading} = queryAPI.useFetchAllFoundPassengersQuery()

    return (
        <div className={classes.foundPassengersPage}>
            <h1>Нашлись пассажиры:</h1>
            {isLoading && <h1>Loading</h1>}
            {error && <h1>error</h1>}
            {foundPassengers && <PassengersList passengers={foundPassengers}/>}
        </div>
    )
}