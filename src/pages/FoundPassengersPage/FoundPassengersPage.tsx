import classes from './FoundPassengersPage.module.scss'
import {PassengersList} from "../../components/PassengersList/PassengersList";

export const FoundPassengersPage = (props: any) => {
    return (
        <div className={classes.foundPassengersPage}>
            <h1>FoundPassengersPage</h1>
            <PassengersList passengers={props.passengers}/>
        </div>
    )
}