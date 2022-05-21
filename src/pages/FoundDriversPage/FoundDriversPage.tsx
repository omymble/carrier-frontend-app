import classes from './FoundDriversPage.module.scss'
import {DriversList} from "../../components/DriversList/DriversList";
import {queryAPI} from "../../redux/services/queryService";
import {parseDriver} from "../../formatFunctions";
import {IFoundDriver} from "../../redux/store/models/IFoundDriver";
import {fromUnix, getAddress} from "../../formatFunctions";
import {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {passengersSlice} from "../../redux/store/reducers/passengersSlice";
import {driversUI} from "../../assets/data/driversUI";

export const FoundDriversPage = (props: {}) => {
    const {addPassenger, deletePassenger} = passengersSlice.actions
    const {passenger} = useAppSelector(state => state.passengersReducer)
    const dispatch = useAppDispatch()

    const {data: foundDrivers, error, isLoading} = queryAPI.useFetchAllFoundDriversQuery()
    const [foundDriversBestTime, setFoundDriversBestTime] = useState<IFoundDriver[] | undefined>([])

    // useEffect(() => {
        if (foundDrivers && foundDriversBestTime?.length === 0) {
            const getData = async () => {
                return Promise.all(foundDrivers.bestTime.map(driver => parseDriver(driver)))
            }
            getData().then(data => {
                setFoundDriversBestTime(data)
            })
        }
    // }, [])

    const deletePassengerTrip = () => {
        dispatch(deletePassenger(passenger.telephone))
    }

    return (
        <div className={classes.foundDriversPage}>
            <Button onClick={deletePassengerTrip}>отменить поездку</Button>
            <h1>Нашлись водители:</h1>
            {isLoading && <h1>Loading</h1>}
            {error && <h1>error</h1>}
            {foundDriversBestTime && <>
                <h1>searching</h1>
                {JSON.stringify(foundDriversBestTime[0])}
                {/*<div>{foundDriversBestTimeList[0]}</div>*/}
                <DriversList drivers={driversUI.driversBestTime}/></>
            }
        </div>
    )
}