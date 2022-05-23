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
import {useNavigate} from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const FoundDriversPage = (props: {}) => {
    const {addPassenger, deletePassenger} = passengersSlice.actions
    const {passenger} = useAppSelector(state => state.passengersReducer)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {data: foundDrivers, error, isLoading} = queryAPI.useFetchAllFoundDriversQuery()
    const [deletePassengerTrip] = queryAPI.useDeletePassengerTripMutation()
    const [driversBestTime, setDriversBestTime] = useState<IFoundDriver[] | undefined>([])
    const [driversBestRoute, setDriversBestRoute] = useState<IFoundDriver[] | undefined>([])
    const [moreDrivers, setMoreDrivers] = useState<IFoundDriver[] | undefined>([])

/*    useEffect(() => {
    if (foundDrivers) {
        const getData = async () => {
            return Promise.all(foundDrivers.driversBestTime.map(driver => parseDriver(driver)))
        }
        getData().then(data => {
            setDriversBestTime(data)
        })
    }
    }, [foundDrivers])*/

    const deleteTrip = async(id: string) => {
        await deletePassengerTrip(id)
            .then(response => {
                if (response) {
                    dispatch(deletePassenger(id))
                }
            })
        navigate('/home')
    }

    return (
        <div className={classes.foundDriversPage}>

            <h1>Для вас нашлись водители</h1>
            {isLoading && <h1>Loading</h1>}
            {error && <h1>ошибка на сервере</h1>}
            {driversBestTime &&
                <>

                    {/*<DriversList drivers={driversBestTime}/>*/}
                </>
            }



            <div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Лучшее совпадение времени:</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <DriversList drivers={driversUI.driversBestTime}/>
                        {/*<DriversList drivers={foundDriversBestTime}/>*/}
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Лучшее совпадение маршрута:</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <DriversList drivers={driversUI.driversBestRoute}/>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography>Еще водители:</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <DriversList drivers={driversUI.moreDrivers}/>
                    </AccordionDetails>
                </Accordion>
            </div>

            <Button onClick={() => deleteTrip(passenger.telephone)}
            >
                отменить поездку
            </Button>

        </div>
    )
}