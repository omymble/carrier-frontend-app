import {queryAPI} from "../../redux/services/queryService";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import Button from "@mui/material/Button";
import {driversSlice} from "../../redux/store/reducers/driversSlice";
import {useEffect, useState} from "react";
import {parsePassenger} from "../../formatFunctions";
import {IFoundPassenger} from "../../redux/store/models/IFoundPassenger";
import {IDriver} from "../../redux/store/models/IDriver";
import {useNavigate} from "react-router-dom";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccordionDetails from "@mui/material/AccordionDetails";
import RouteIcon from "@mui/icons-material/Route";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import {PassengersList} from "../../components/PassengersList/PassengersList";
import Container from "@mui/material/Container";

export const FoundPassengersPage = (props: {}) => {
    const {addDriver, deleteDriver} = driversSlice.actions
    const {driver} = useAppSelector(state => state.driversReducer)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()


    const {data: foundPassengers, error, isLoading} = queryAPI.useFetchAllFoundPassengersQuery()
    const [deleteDriverDB] = queryAPI.useDeleteDriverMutation()
    const [passengersBestTime, setPassengersBestTime] = useState<IFoundPassenger[] | undefined>([])
    const [passengersBestRoute, setPassengersBestRoute] = useState<IFoundPassenger[] | undefined>([])
    const [morePassengers, setMorePassengers] = useState<IFoundPassenger[] | undefined>([])

    useEffect(() => {
        if (foundPassengers) {
            const getBestTime = async () => {
                return Promise.all(foundPassengers.passengersBestTime.map(passenger => parsePassenger(passenger)))
            }
            getBestTime().then(data => {
                setPassengersBestTime(data)
            })
            const getBestRoute = async () => {
                return Promise.all(foundPassengers.passengersBestRoute.map(passenger => parsePassenger(passenger)))
            }
            getBestRoute().then(data => {
                setPassengersBestRoute(data)
            })
            const getMore = async () => {
                return Promise.all(foundPassengers.morePassengers.map(passenger => parsePassenger(passenger)))
            }
            getMore().then(data => {
                setMorePassengers(data)
            })
        }
    }, [foundPassengers])


    const deleteDriverTrip = async (driver: IDriver) => {
        console.log('delete1', driver)
        await deleteDriverDB(driver)
            .then((response: any) => {
                console.log('delete2', response)
                if (response) {
                    console.log('delete3', driver)
                    dispatch(deleteDriver(driver.id))
                }
            })
        navigate('/home')
        dispatch(deleteDriver(driver.id))
    }

    return (
        <Container sx={{maxWidth: "1000px"}} maxWidth={false}>

            <Typography variant={'h4'} gutterBottom={true}>Для вас нашлись пассажиры</Typography>
            {isLoading && <Typography variant={'h4'} gutterBottom={true}>загрузка</Typography>}
            {error && <Typography variant={'h4'} gutterBottom={true}>ошибка на сервере</Typography>}


            <div>
                {passengersBestTime && <Accordion>
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
                        <PassengersList passengers={passengersBestTime}/>
                    </AccordionDetails>
                </Accordion>}

                {passengersBestRoute && <Accordion>
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
                        <PassengersList passengers={passengersBestRoute}/>
                    </AccordionDetails>
                </Accordion>}

                {morePassengers && <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        sx={{display: 'flex'}}
                    >
                        <GroupAddIcon sx={{mr: '20px'}}/>
                        <Typography>Еще пассажиры:</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {/*<DriversList drivers={driversUI.moreDrivers}/>*/}
                        <PassengersList passengers={morePassengers}/>
                    </AccordionDetails>
                </Accordion>}
            </div>

            <Button onClick={() => deleteDriverTrip(driver)}
                    sx={{mt: '20px'}}
            >
                отменить поездку
            </Button>
        </Container>
    )
}