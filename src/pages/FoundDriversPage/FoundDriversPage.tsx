import classes from './FoundDriversPage.module.scss'
import {DriversList} from "../../components/DriversList/DriversList";
import {queryAPI} from "../../redux/services/queryService";
import {parseDriver} from "../../formatFunctions";
import {IFoundDriver} from "../../redux/store/models/IFoundDriver";
import {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {passengersSlice} from "../../redux/store/reducers/passengersSlice";
import {useNavigate} from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RouteIcon from '@mui/icons-material/Route';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import {IPassenger} from "../../redux/store/models/IPassenger";

export const FoundDriversPage = (props: {}) => {
    const {addPassenger, deletePassenger} = passengersSlice.actions
    const {passenger} = useAppSelector(state => state.passengersReducer)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {data: foundDrivers, error, isLoading} = queryAPI.useFetchAllFoundDriversQuery()
    const [deletePassengerDB] = queryAPI.useDeletePassengerMutation()
    const [driversBestTime, setDriversBestTime] = useState<IFoundDriver[] | undefined>([])
    const [driversBestRoute, setDriversBestRoute] = useState<IFoundDriver[] | undefined>([])
    const [moreDrivers, setMoreDrivers] = useState<IFoundDriver[] | undefined>([])

    useEffect(() => {
    if (foundDrivers) {
        const getBestTime = async () => {
            return Promise.all(foundDrivers.driversBestTime.map(driver => parseDriver(driver)))
        }
        getBestTime().then(data => {
            setDriversBestTime(data)
        })
        const getBestRoute = async () => {
            return Promise.all(foundDrivers.driversBestRoute.map(driver => parseDriver(driver)))
        }
        getBestRoute().then(data => {
            setDriversBestRoute(data)
        })
        const getMore = async () => {
            return Promise.all(foundDrivers.moreDrivers.map(driver => parseDriver(driver)))
        }
        getMore().then(data => {
            setMoreDrivers(data)
        })
    }
    }, [foundDrivers])

    const deletePassengerTrip = async(passenger: IPassenger) => {
        await deletePassengerDB(passenger)
            .then((response: any) => {
                if (response) {
                    dispatch(deletePassenger(passenger.id))
                }
            })
        navigate('/home')
    }

    return (
        <div>

            <Typography variant={'h4'} gutterBottom={true}>Для вас нашлись водители</Typography>
            {isLoading && <Typography variant={'h4'} gutterBottom={true}>загрузка</Typography>}
            {error && <Typography variant={'h4'} gutterBottom={true}>ошибка на сервере</Typography>}


            <div>
                {driversBestTime && <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{display: 'flex'}}
                    >
                        <AccessTimeIcon sx={{mr: '20px'}}/>
                        <Typography>Лучшее совпадение времени:</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {/*<DriversList drivers={driversUI.driversBestTime}/>*/}
                        <DriversList drivers={driversBestTime}/>
                    </AccordionDetails>
                </Accordion>}

                {driversBestRoute && <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        sx={{display: 'flex'}}
                    >
                        <RouteIcon sx={{mr: '20px'}}/>
                        <Typography>Лучшее совпадение маршрута:</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {/*<DriversList drivers={driversUI.driversBestRoute}/>*/}
                        <DriversList drivers={driversBestRoute}/>
                    </AccordionDetails>
                </Accordion>}

                {moreDrivers && <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        sx={{display: 'flex'}}
                    >
                        <GroupAddIcon sx={{mr: '20px'}}/>
                        <Typography>Еще водители:</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {/*<DriversList drivers={driversUI.moreDrivers}/>*/}
                        <DriversList drivers={moreDrivers}/>
                    </AccordionDetails>
                </Accordion>}
            </div>

            <Button onClick={() => deletePassengerTrip(passenger)}
                    sx={{mt: '20px'}}
            >
                отменить поездку
            </Button>

        </div>
    )
}