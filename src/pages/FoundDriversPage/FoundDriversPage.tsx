import classes from './FoundDriversPage.module.scss'
import {DriversList} from "../../components/DriversList/DriversList";
import {DriverObject} from "../../types";

export const FoundDriversPage = (props: {drivers: Array<DriverObject>}) => {
    return (
        <div className={classes.foundDriversPage}>
            <h1>FoundDriversPage</h1>
            <DriversList drivers={props.drivers}/>
        </div>
    )
}