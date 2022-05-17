import classes from './FoundDriversPage.module.scss'
import {DriversList} from "../../components/DriversList/DriversList";
import {queryAPI} from "../../redux/services/queryService";


export const FoundDriversPage = (props: {}) => {

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