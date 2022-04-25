import classes from './FoundDriversPage.module.scss'
import {DriversList} from "../../components/DriversList/DriversList";

export const FoundDriversPage = (props: any) => {
    return (
        <div className={classes.foundDriversPage}>
            <h1>FoundDriversPage</h1>
            <DriversList drivers={props.drivers}/>
        </div>
    )
}