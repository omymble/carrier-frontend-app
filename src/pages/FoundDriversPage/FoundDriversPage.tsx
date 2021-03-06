import {DriversList} from "../../components/DriversList/DriversList";
import {queryAPI} from "../../redux/services/queryService";
import {parseDriver, parsePassenger} from "../../formatFunctions";
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
import {Box, Divider, List, ListItem, ListItemText} from "@mui/material";
import {IFoundPassenger} from "../../redux/store/models/IFoundPassenger";
import LoopIcon from '@mui/icons-material/Loop';

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
                        <ListItemText primary="??????????"
                                      secondary={passengerTrip?.time}
                                      primaryTypographyProps={{sx: {fontSize: "30px"}}}
                                      secondaryTypographyProps={{sx: {fontSize: "20px"}}}
                        />
                    </ListItem>
                    <Divider variant="fullWidth" component="li"/>
                    <ListItem sx={{pl: "0px"}}>
                        <ListItemText primary="???????????? ????????????????"
                                      secondary={passengerTrip?.from}
                                      primaryTypographyProps={{sx: {fontSize: "30px"}}}
                                      secondaryTypographyProps={{sx: {fontSize: "20px"}}}
                        />
                    </ListItem>
                    <Divider variant="fullWidth" component="li"/>
                    <ListItem sx={{pl: "0px"}}>
                        <ListItemText primary="?????????? ????????????????"
                                      secondary={passengerTrip?.to}
                                      primaryTypographyProps={{sx: {fontSize: "30px"}}}
                                      secondaryTypographyProps={{sx: {fontSize: "20px"}}}
                        />
                    </ListItem>
                </List>
                <Button onClick={() => deletePassengerTrip(passenger)} variant="outlined" sx={{margin: "0 auto"}}>
                    ???????????????? ??????????????
                </Button>
            </Box>

            <Typography variant={'h4'} gutterBottom={true}>?????? ?????? ?????????????? ????????????????</Typography>
            {isLoading && <LoopIcon sx={{fontSize: 100}}/>}
            {error &&
                <Typography variant={'h4'} gutterBottom={true}>
                    ???????????? ???? ??????????????
                </Typography>
            }
            {foundDrivers &&
                <Box>
                    {driversBestTime && <Accordion color={"#e3f2fd80"} sx={{bgcolor: "#e3f2fd90"}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{display: 'flex', alignItems: 'center'}}
                        >
                            <AccessTimeIcon sx={{margin: 'auto 0px', mr: '20px'}}/>
                            <Typography sx={{fontSize: {xs: "25px", sm: "30px"}}}>???????????? ??????????:</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <DriversList drivers={driversBestTime}/>
                        </AccordionDetails>
                    </Accordion>}

                    {driversBestRoute && <Accordion sx={{bgcolor: "#e3f2fd90"}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            sx={{display: 'flex', alignItems: 'center'}}
                        >
                            <RouteIcon sx={{margin: 'auto 0px', mr: '20px'}}/>
                            <Typography sx={{fontSize: {xs: "25px", sm: "30px"}}}>???????????? ??????????????:</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <DriversList drivers={driversBestRoute}/>
                        </AccordionDetails>
                    </Accordion>}

                    {moreDrivers && <Accordion sx={{bgcolor: "#e3f2fd90"}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                            sx={{display: 'flex', alignItems: 'center'}}
                        >
                            <GroupAddIcon sx={{margin: 'auto 0px', mr: '20px'}}/>
                            <Typography sx={{fontSize: {xs: "25px", sm: "30px"}}}>?????? ????????????????:</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <DriversList drivers={moreDrivers}/>
                        </AccordionDetails>
                    </Accordion>}
                </Box>
            }
            {!foundDrivers &&
                <Typography variant={'h4'} gutterBottom={true}>
                    ?? ?????????????????? ?????????????????? ???? ??????????????
                </Typography>
            }
        </Container>
    )
}