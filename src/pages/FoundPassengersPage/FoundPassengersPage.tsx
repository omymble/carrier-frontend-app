import {queryAPI} from "../../redux/services/queryService";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import Button from "@mui/material/Button";
import {driversSlice} from "../../redux/store/reducers/driversSlice";
import {useEffect, useState} from "react";
import {parseDriver, parsePassenger} from "../../formatFunctions";
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
import LoopIcon from '@mui/icons-material/Loop';
import {IFoundDriver} from "../../redux/store/models/IFoundDriver";
import {Box, Divider, List, ListItem, ListItemText} from "@mui/material";


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
    const [driverTrip, setDriverTrip] = useState<IFoundDriver | undefined>({} as IFoundDriver)

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
            const dTrip = async () => {
                return Promise.resolve(parseDriver(driver))
            }
            dTrip().then(data => {
                setDriverTrip(data)
            })
        }
    }, [foundPassengers, driver])


    const deleteDriverTrip = async (driver: IDriver) => {
        await deleteDriverDB(driver)
            .then((response: any) => {
                if (response) {
                    dispatch(deleteDriver(driver.id))
                    navigate('/home')
                }
            })
    }

    return (
        <Container sx={{maxWidth: "1000px"}} maxWidth={false}>

            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"start"}
                sx={{
                    bgcolor: 'background.paper',
                    pb: 6,
                }}
            >

                <List
                    sx={{
                        width: '100%'
                    }}
                >
                    <ListItem sx={{pl: "0px"}}>
                        <ListItemText primary="Время"
                                      secondary={driverTrip?.time}
                                      primaryTypographyProps={{sx: {fontSize: "30px"}}}
                                      secondaryTypographyProps={{sx: {fontSize: "20px"}}}
                        />
                    </ListItem>
                    <Divider variant="fullWidth" component="li"/>
                    <ListItem sx={{pl: "0px"}}>
                        <ListItemText primary="Начало маршрута"
                                      secondary={driverTrip?.from}
                                      primaryTypographyProps={{sx: {fontSize: "30px"}}}
                                      secondaryTypographyProps={{sx: {fontSize: "20px"}}}
                        />
                    </ListItem>
                    <Divider variant="fullWidth" component="li"/>
                    <ListItem sx={{pl: "0px"}}>
                        <ListItemText primary="Конец маршрута"
                                      secondary={driverTrip?.to}
                                      primaryTypographyProps={{sx: {fontSize: "30px"}}}
                                      secondaryTypographyProps={{sx: {fontSize: "20px"}}}
                        />
                    </ListItem>
                </List>
                <Button onClick={() => deleteDriverTrip(driver)} variant="outlined" sx={{margin: "0 auto"}}>
                    отменить поездку
                </Button>
            </Box>

            <Typography variant={'h4'} gutterBottom={true}>Для вас нашлись пассажиры</Typography>
            {isLoading && <LoopIcon sx={{fontSize: 100}}/>}
            {error &&
                <Typography variant={'h4'} gutterBottom={true}>
                    ошибка на сервере
                </Typography>
            }

            {foundPassengers &&
                <Box>
                    {passengersBestTime && <Accordion color={"#e3f2fd80"} sx={{bgcolor: "#e3f2fd90"}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{display: 'flex', alignItems: 'center'}}
                        >
                            <AccessTimeIcon sx={{margin: 'auto 0px', mr: '20px'}}/>
                            <Typography sx={{fontSize: {xs: "25px", sm: "30px"}}}>Лучшее время:</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <PassengersList passengers={passengersBestTime}/>
                        </AccordionDetails>
                    </Accordion>}

                    {passengersBestRoute && <Accordion sx={{bgcolor: "#e3f2fd90"}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            sx={{display: 'flex', alignItems: 'center'}}
                        >
                            <RouteIcon sx={{margin: 'auto 0px', mr: '20px'}}/>
                            <Typography sx={{fontSize: {xs: "25px", sm: "30px"}}}>Лучший маршрут:</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <PassengersList passengers={passengersBestRoute}/>
                        </AccordionDetails>
                    </Accordion>}

                    {morePassengers && <Accordion sx={{bgcolor: "#e3f2fd90"}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                            sx={{display: 'flex', alignItems: 'center'}}
                        >
                            <GroupAddIcon sx={{margin: 'auto 0px', mr: '20px'}}/>
                            <Typography sx={{fontSize: {xs: "25px", sm: "30px"}}}>Еще водители:</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <PassengersList passengers={morePassengers}/>
                        </AccordionDetails>
                    </Accordion>}
                </Box>
            }
            {!foundPassengers &&
                <Typography variant={'h4'} gutterBottom={true}>
                    К сожалению в этот раз пассажиров не найдено
                </Typography>
            }
        </Container>
    )
}