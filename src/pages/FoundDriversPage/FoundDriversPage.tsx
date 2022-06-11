import {DriversList} from "../../components/DriversList/DriversList";
import {queryAPI} from "../../redux/services/queryService";
import {fromUnix, getAddress, parseDriver, parsePassenger} from "../../formatFunctions";
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
import Container from "@mui/material/Container";
import {Box, Divider, List, ListItem, ListItemAvatar, ListItemText, responsiveFontSizes, Stack} from "@mui/material";
import {IFoundPassenger} from "../../redux/store/models/IFoundPassenger";

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
    const [passengerTrip, setPassengerTrip] = useState<IFoundPassenger | undefined>({} as IFoundPassenger)

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
        const pTrip = async () => {
            return Promise.resolve(parsePassenger(passenger))
        }
        pTrip().then(data => {
            setPassengerTrip(data)
        })
    }, [foundDrivers, passenger])

    const deletePassengerTrip = async (passenger: IPassenger) => {
        await deletePassengerDB(passenger)
            .then((response: any) => {
                if (response) {
                    dispatch(deletePassenger(passenger.id))
                }
            })
        navigate('/home')
    }

    return (
        <Container sx={{maxWidth: "1000px"}} maxWidth={false}>
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"start"}
                sx={{
                    bgcolor: 'background.paper',
                    // pt: 8,
                    pb: 6,
                }}
            >


                {/*<Box maxWidth="sm">*/}
{/*                    <Typography
                        variant="h3"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        ваша поездка:
                    </Typography>*/}
                    {/*<Container>*/}
                        <List
                            sx={{
                                width: '100%',
                                // maxWidth: 1000,
                                // minWidth: 300,
                                bgcolor: 'background.paper'
                            }}
                        >
                            <ListItem sx={{pl: "0px"}}>
                                <ListItemText primary="Время"
                                              secondary={passengerTrip?.time}
                                              primaryTypographyProps={{sx: {fontSize: "30px"}}}
                                              secondaryTypographyProps={{sx: {fontSize: "20px"}}}
                                />
                            </ListItem>
                            <Divider variant="fullWidth" component="li" />
                            <ListItem sx={{pl: "0px"}}>
                                <ListItemText primary="Начало маршрута"
                                              secondary={passengerTrip?.from}
                                              primaryTypographyProps={{sx: {fontSize: "30px"}}}
                                              secondaryTypographyProps={{sx: {fontSize: "20px"}}}
                                />
                            </ListItem>
                            <Divider variant="fullWidth" component="li" />
                            <ListItem sx={{pl: "0px"}}>
                                <ListItemText primary="Конец маршрута"
                                              secondary={passengerTrip?.to}
                                              primaryTypographyProps={{sx: {fontSize: "30px"}}}
                                              secondaryTypographyProps={{sx: {fontSize: "20px"}}}
                                />
                            </ListItem>
                        </List>
                    {/*</Container>*/}
{/*                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        Время: {fromUnix(passenger.time)}<br/>
                        <Divider variant="fullWidth" />
                        Начало маршрута:<br/>{passengerTrip?.from}<br/>
                        <Divider variant="inset" component="li" />
                        Конец маршрута:<br/>{passengerTrip?.to}<br/>
                    </Typography>*/}
                    <Button onClick={() => deletePassengerTrip(passenger)}
                        // sx={{mt: '20px'}}
                            variant="outlined"
                    >
                        отменить поездку
                    </Button>
                {/*</Box>*/}
            </Box>

            <Typography variant={'h4'} gutterBottom={true}>Для вас нашлись водители</Typography>
            {isLoading && <Typography variant={'h4'} gutterBottom={true}>загрузка</Typography>}
            {error && <Typography variant={'h4'} gutterBottom={true}>ошибка на сервере</Typography>}
            {foundDrivers &&
                <div>
                    {driversBestTime && <Accordion>
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
                            {/*<DriversList drivers={driversUI.driversBestTime}/>*/}
                            <DriversList drivers={driversBestTime}/>
                        </AccordionDetails>
                    </Accordion>}

                    {driversBestRoute && <Accordion>
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
                            {/*<DriversList drivers={driversUI.driversBestRoute}/>*/}
                            <DriversList drivers={driversBestRoute}/>
                        </AccordionDetails>
                    </Accordion>}

                    {moreDrivers && <Accordion>
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
                            {/*<DriversList drivers={driversUI.moreDrivers}/>*/}
                            <DriversList drivers={moreDrivers}/>
                        </AccordionDetails>
                    </Accordion>}
                </div>
            }




        </Container>
    )
}