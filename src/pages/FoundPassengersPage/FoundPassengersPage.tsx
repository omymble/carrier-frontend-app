import classes from './FoundPassengersPage.module.scss'
import {PassengersList} from "../../components/PassengersList/PassengersList";
import {useAppSelector} from "../../redux/hooks/hooks";

export const FoundPassengersPage = (props: {}) => {
    const {telInput, passengers, isLoading, error} = useAppSelector(state => state.passengersReducer)

    return (
        <div className={classes.foundPassengersPage}>
            <h1>Нашлись пассажиры:</h1>
            <PassengersList passengers={passengers}/>
        </div>
    )
}